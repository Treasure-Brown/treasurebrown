function initPortfolioAccess() {
  var TOKEN_KEY = "tb_access";
  var VISIT_KEY = "tb_visit_start";
  var NAV_KEY = "tb_internal_nav";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var host = location.hostname || "127.0.0.1";
  if (host === "::1") host = "[::1]";
  var api = "http://" + host + ":3000";

  function readToken() {
    try { return localStorage.getItem(TOKEN_KEY) || ""; }
    catch (e) { return ""; }
  }
  function writeToken(value) {
    try { localStorage.setItem(TOKEN_KEY, value); }
    catch (e) {}
  }
  function clearToken() {
    try { localStorage.removeItem(TOKEN_KEY); }
    catch (e) {}
    try { sessionStorage.removeItem(VISIT_KEY); }
    catch (e) {}
  }
  function rememberVisit() {
    try {
      if (!sessionStorage.getItem(VISIT_KEY)) sessionStorage.setItem(VISIT_KEY, String(Date.now()));
    } catch (e) {}
  }

  document.addEventListener("click", function (e) {
    var node = e.target;
    var link = node && node.closest ? node.closest("a") : null;
    if (!link || !link.href || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || link.target === "_blank") return;
    try {
      if (new URL(link.href, location.href).origin === location.origin) sessionStorage.setItem(NAV_KEY, "1");
    } catch (err) {}
  }, true);

  window.addEventListener("pagehide", function () {
    var internal = false;
    try {
      internal = sessionStorage.getItem(NAV_KEY) === "1";
      sessionStorage.removeItem(NAV_KEY);
    } catch (e) {}
    if (internal) return;
    var start = "";
    var access = readToken();
    try { start = sessionStorage.getItem(VISIT_KEY) || ""; } catch (e) {}
    if (!start || !access) return;
    var duration = Math.round((Date.now() - parseInt(start, 10)) / 1000);
    try { sessionStorage.removeItem(VISIT_KEY); } catch (e) {}
    if (duration <= 0) return;
    fetch(api + "/api/analytics/session", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: "Bearer " + access },
      body: JSON.stringify({ durationSeconds: duration }),
      keepalive: true
    }).catch(function () {});
  });

  function setPageInert(on) {
    Array.prototype.forEach.call(document.body.children, function (el) {
      if (el.id === "gate") return;
      if (!on && el.id === "mobile-nav" && !el.classList.contains("open")) {
        el.inert = true;
        return;
      }
      el.inert = on;
    });
  }

  function reveal() {
    document.documentElement.classList.remove("locked");
    setPageInert(false);
    var gate = document.getElementById("gate");
    if (gate) gate.remove();
    rememberVisit();
  }

  function showGate() {
    document.documentElement.classList.add("locked");
    if (document.getElementById("gate")) return;
    var gate = document.createElement("div");
    gate.id = "gate";
    gate.className = "gate";
    gate.setAttribute("role", "dialog");
    gate.setAttribute("aria-modal", "true");
    gate.setAttribute("aria-labelledby", "gate-title");
    gate.innerHTML =
      '<div class="gate-frame" data-panel="password">' +
        '<div class="gate-top"><span class="brand">TB<b>.</b></span><p class="eyebrow">Private</p></div>' +
        '<div class="gate-main">' +
          '<div>' +
            '<h1 id="gate-title">A password<em>opens the work<span class="dot">.</span></em></h1>' +
            '<p class="deck">This portfolio is shared with an invitation. Enter the password that came with yours.</p>' +
          '</div>' +
          '<form class="gate-card" id="gate-form">' +
            '<label class="eyebrow" for="gate-password">Password</label>' +
            '<input id="gate-password" name="password" type="password" autocomplete="current-password" required>' +
            '<p class="gate-error" id="gate-error" role="alert"></p>' +
            '<button class="btn primary" type="submit">Enter <span class="ic r" aria-hidden="true">→</span></button>' +
          '</form>' +
        '</div>' +
        '<p class="gate-foot">Treasure Brown · Design lead</p>' +
      '</div>' +
      '<div class="gate-load" data-panel="load" hidden>' +
        '<p class="eyebrow">Opening</p>' +
        '<p class="gate-welcome" id="gate-welcome" tabindex="-1"></p>' +
        '<span class="gate-bar" aria-hidden="true"><i></i></span>' +
      '</div>';
    document.body.appendChild(gate);
    setPageInert(true);

    var form = document.getElementById("gate-form");
    var input = document.getElementById("gate-password");
    var error = document.getElementById("gate-error");
    var button = form.querySelector("button");
    var passwordPanel = gate.querySelector('[data-panel="password"]');
    var loadPanel = gate.querySelector('[data-panel="load"]');
    var welcome = document.getElementById("gate-welcome");

      function fail(message) {
      error.textContent = message;
      button.disabled = false;
      input.focus();
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      error.textContent = "";
      button.disabled = true;
      fetch(api + "/api/access/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: input.value })
      }).then(function (res) {
        return res.json().catch(function () { return {}; }).then(function (data) {
          if (!res.ok || !data.token) {
            var message = data.error || "That password didn’t open the portfolio.";
            if (message === "Invalid access code" || message === "Access code is required") {
              message = "That password didn’t open the portfolio.";
            }
            fail(message);
            return;
          }
          writeToken(data.token);
          welcome.textContent = data.welcome || "Welcome.";
          passwordPanel.hidden = true;
          loadPanel.hidden = false;
          gate.setAttribute("aria-labelledby", "gate-welcome");
          welcome.focus();
          var wait = reduce ? 700 : 2200;
          gate.style.setProperty("--gate-ms", wait + "ms");
          window.setTimeout(reveal, wait);
        });
      }).catch(function () {
        fail("The portfolio can’t be reached right now. Try again in a moment.");
      });
    });

    window.setTimeout(function () { input.focus(); }, 0);
  }

  var existing = readToken();
  if (!existing) {
    showGate();
    return;
  }

  fetch(api + "/api/access/me", { headers: { Authorization: "Bearer " + existing } })
    .then(function (res) { return res.json(); })
    .then(function (data) {
      if (data && data.label) reveal();
      else {
        clearToken();
        showGate();
      }
    })
    .catch(function () { reveal(); });
}

(function () {
  initPortfolioAccess();

  var mobileNav = document.getElementById("mobile-nav");
  var menuBtn = document.getElementById("menu-btn");
  var nav = document.getElementById("site-nav");
  var blob = nav && nav.querySelector(".nav-blob");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  var fine = window.matchMedia("(hover: hover) and (pointer: fine)");

  var bar = document.getElementById("read-progress");
  function updateProgress() {
    if (!bar || !document.body.classList.contains("has-progress")) return;
    bar.classList.add("on");
    var max = document.documentElement.scrollHeight - innerHeight;
    bar.style.setProperty("--p", max > 0 ? Math.min(1, scrollY / max).toFixed(4) : "0");
  }
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();

  function closeMenu(returnFocus) {
    if (!mobileNav || !menuBtn) return;
    mobileNav.classList.remove("open");
    mobileNav.inert = true;
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.textContent = "Menu";
    if (returnFocus) menuBtn.focus();
  }
  if (menuBtn && mobileNav) {
    mobileNav.inert = true;
    menuBtn.addEventListener("click", function () {
      var open = !mobileNav.classList.contains("open");
      mobileNav.classList.toggle("open", open);
      mobileNav.inert = !open;
      menuBtn.setAttribute("aria-expanded", String(open));
      menuBtn.textContent = open ? "Close" : "Menu";
    });
    mobileNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { closeMenu(false); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && mobileNav.classList.contains("open")) closeMenu(true);
    });
  }

  if (nav && blob) {
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("mouseenter", function () {
        blob.style.width = a.offsetWidth + "px";
        blob.style.transform = "translateX(" + a.offsetLeft + "px)";
        blob.style.opacity = a.getAttribute("aria-current") === "true" ? "0" : "1";
      });
    });
    nav.addEventListener("mouseleave", function () {
      blob.style.opacity = "0";
    });
  }

  var io = "IntersectionObserver" in window
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.remove("pre");
            io.unobserve(e.target);
          }
        });
      }, { rootMargin: "0px 0px -8% 0px" })
    : null;

  function primeSettle() {
    if (!io || reduce.matches) return;
    document.querySelectorAll("[data-settle]").forEach(function (el) {
      if (el.offsetParent === null) return;
      var r = el.getBoundingClientRect();
      if (r.top > innerHeight * 0.92) {
        el.classList.add("pre");
        io.observe(el);
      }
    });
  }
  primeSettle();

  document.querySelectorAll(".magnetic").forEach(bindMag);
  function bindMag(el) {
    var host = el.closest(".next-case") || el;
    host.addEventListener("mousemove", function (e) {
      if (!fine.matches || reduce.matches) return;
      var r = el.getBoundingClientRect();
      var dx = (e.clientX - (r.left + r.width / 2)) / r.width;
      var dy = (e.clientY - (r.top + r.height / 2)) / r.height;
      el.style.transform = "translate(" + (dx * 10).toFixed(1) + "px," + (dy * 8).toFixed(1) + "px)";
    });
    host.addEventListener("mouseleave", function () {
      el.style.transform = "";
    });
  }

  document.querySelectorAll(".editor-note, .contact").forEach(function (panel) {
    panel.addEventListener("pointermove", function (e) {
      if (!fine.matches || reduce.matches) return;
      var r = panel.getBoundingClientRect();
      panel.style.setProperty("--mx", (e.clientX - r.left) + "px");
      panel.style.setProperty("--my", (e.clientY - r.top) + "px");
    });
  });

  var sc = document.getElementById("scribble");
  function draw() {
    if (!sc) return;
    sc.classList.remove("draw");
    sc.classList.add("wait");
    void sc.offsetWidth;
    sc.classList.add("draw");
    sc.classList.remove("wait");
  }
  if (sc) {
    if (reduce.matches || !io) sc.classList.remove("wait");
    else {
      var sio = new IntersectionObserver(function (es) {
        if (es[0].isIntersecting) {
          draw();
          sio.disconnect();
        }
      }, { threshold: 0.6 });
      sio.observe(sc);
      sc.addEventListener("mouseenter", draw);
    }
    sc.addEventListener("click", function () {
      if (!reduce.matches) draw();
    });
  }

  if ("IntersectionObserver" in window) {
    var mid = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        e.target.classList.toggle("is-active", e.isIntersecting && !fine.matches);
      });
    }, { rootMargin: "-40% 0px -45% 0px" });
    document.querySelectorAll(".project, .practice-card").forEach(function (el) {
      mid.observe(el);
    });
  }

  var peek = document.getElementById("peek");
  if (peek) {
    var peekInner = peek.querySelector(".peek-inner");
    var tx = 0, ty = 0, x = 0, y = 0, raf = null, active = null, snap = false;
    function place() {
      var blurb = active ? active.querySelector(".project-top > p") : null;
      var facts = active ? active.querySelector(".fact-strip") : null;
      var br = blurb ? blurb.getBoundingClientRect() : { left: tx, top: ty, width: 280, bottom: ty };
      var title = active ? active.querySelector("h4") : null;
      var viewW = document.documentElement.clientWidth;
      var viewH = document.documentElement.clientHeight;
      var pad = 20;
      var shell = active ? active.closest(".shell") : null;
      var shellRight = shell ? shell.getBoundingClientRect().right - 8 : viewW - pad;
      var ceiling = Math.max(76, br.top);
      var floor = (facts ? facts.getBoundingClientRect().top : br.bottom) - 12;
      var avail = Math.max(120, Math.min(floor - ceiling, viewH - ceiling - pad));
      var rightBound = Math.min(viewW - pad, shellRight);
      var leftBound = title ? title.getBoundingClientRect().right + 12 : pad;
      var maxW = Math.max(160, rightBound - Math.max(leftBound, pad));
      var shot = peek.querySelector("img");
      if (shot) {
        var aw = shot.naturalWidth || Number(shot.getAttribute("width")) || 16;
        var ah = shot.naturalHeight || Number(shot.getAttribute("height")) || 10;
        var wFit = Math.min(maxW, avail * (aw / ah));
        peek.style.width = Math.max(160, Math.min(wFit, maxW)) + "px";
        shot.style.maxHeight = avail + "px";
      } else {
        peek.style.width = Math.min(maxW, Math.max(200, br.width)) + "px";
      }
      var w = peek.offsetWidth, h = peek.offsetHeight;
      var nx = Math.min(br.left, rightBound - w);
      nx = Math.max(pad, Math.min(nx, rightBound - w));
      var ny = ceiling;
      if (floor - ceiling > h + 8) ny = Math.max(ceiling, Math.min(ty - h * 0.25, floor - h));
      ny = Math.max(76, Math.min(ny, viewH - h - pad));
      if (reduce.matches || snap) { x = nx; y = ny; snap = false; }
      else { x += (nx - x) * 0.18; y += (ny - y) * 0.18; }
      peek.style.transform = "translate3d(" + x.toFixed(1) + "px," + y.toFixed(1) + "px,0)";
      if (active && (Math.abs(nx - x) > 0.5 || Math.abs(ny - y) > 0.5)) raf = requestAnimationFrame(place);
      else raf = null;
    }
    function kick() { if (!raf) raf = requestAnimationFrame(place); }
    function show(row, cx, cy) {
      var cover = row.querySelector(".cover");
      if (!cover || !fine.matches) return;
      if (active !== row) {
        peekInner.innerHTML = "";
        peekInner.appendChild(cover.cloneNode(true));
      }
      var first = !active;
      active = row;
      tx = cx;
      ty = cy;
      if (first) snap = true;
      peek.classList.add("on");
      kick();
    }
    function hide() { active = null; peek.classList.remove("on"); }
    document.querySelectorAll(".project").forEach(function (row) {
      row.addEventListener("mouseenter", function (e) { show(row, e.clientX, e.clientY); });
      row.addEventListener("mousemove", function (e) {
        if (active === row) { tx = e.clientX; ty = e.clientY; kick(); }
        else show(row, e.clientX, e.clientY);
      });
      row.addEventListener("mouseleave", hide);
      row.addEventListener("focusin", function () {
        var heading = row.querySelector("h4");
        if (!heading) return;
        var r = heading.getBoundingClientRect();
        show(row, r.right, r.top + r.height / 2);
      });
      row.addEventListener("focusout", hide);
    });
    window.addEventListener("scroll", function () { if (active) hide(); }, { passive: true });
  }

  document.querySelectorAll(".flip-inner").forEach(function (btn) {
    var card = btn.closest(".flip");
    var name = btn.getAttribute("aria-label").replace(/: (show summary|show title)$/, "");
    btn.addEventListener("click", function () {
      var on = !card.classList.contains("is-flipped");
      card.classList.toggle("is-flipped", on);
      btn.setAttribute("aria-pressed", String(on));
      btn.setAttribute("aria-label", name + (on ? ": show title" : ": show summary"));
    });
  });

  var copyBtn = document.getElementById("copy-email");
  var email = document.getElementById("email");
  var toast = document.getElementById("toast");
  var toastTimer;
  function showToast(msg) {
    if (!toast) return;
    toast.querySelector("span").textContent = msg;
    toast.classList.add("on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove("on"); }, 2200);
  }
  if (copyBtn && email) {
    copyBtn.addEventListener("click", function () {
      var text = email.textContent.trim();
      function done() {
        try { navigator.vibrate && navigator.vibrate(12); } catch (e) {}
        copyBtn.textContent = "Copied";
        showToast("Email copied");
        setTimeout(function () { copyBtn.textContent = "Copy email"; }, 1800);
      }
      function fallback() {
        var range = document.createRange();
        range.selectNodeContents(email);
        var selection = getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        showToast("Selected. Press Ctrl or Command + C");
      }
      try { navigator.clipboard.writeText(text).then(done, fallback); }
      catch (e) { fallback(); }
    });
  }

  var clock = document.getElementById("clock");
  function tick() {
    if (!clock) return;
    try {
      var parts = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        hour: "numeric",
        minute: "2-digit",
      }).formatToParts(new Date());
      var html = parts.map(function (part) {
        return part.type === "literal" && part.value === ":" ? '<span class="colon">:</span>' : part.value;
      }).join("");
      clock.innerHTML = "Eastern Time · " + html;
    } catch (e) {}
  }
  if (clock) {
    tick();
    setInterval(tick, 20000);
  }
})();
