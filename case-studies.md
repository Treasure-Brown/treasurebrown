# Case studies

Treasure Brown. The stories as they read on the site.

---

*Case 01 of 08 · Platform migration*
*Happy Money / Platform migration / 2024–2025*
# The system had to change. The business couldn’t stop.

We had about nine months to replace a critical piece of Happy Money’s lending infrastructure. The deadline was fixed. The team was small. And while we rebuilt the foundation underneath the application, people still needed to apply for loans every day.

### At a glance

- **The problem:** A critical piece of the lending infrastructure had to be replaced on a fixed deadline, while new applications, existing applicants, support, and partners still depended on the experience.
- **Why it mattered:** There was no version of the project where we could stop the funnel, rebuild quietly, and turn it back on when we were ready.
- **My role:** Top-of-funnel product owner, lead experience designer, and UAT lead. I worked across product and design.
- **What I changed:** What needed to change, what could stay, what had to wait, and how the technical shift would show up for customers.
- **The result:** The new foundation cut over in January 2025. A small team replaced a critical part of the company without stopping the business that depended on it.

- **Role:** Product owner, design, UAT
- **Timeframe:** 2024 → Jan 2025
- **Team:** Product / Design / Eng / Ops
- **Outcome:** Cut over, business kept moving

*The new foundation translated into customer-facing states. A concept of the experience, not a production screenshot.*

*01 / The situation*

## Nine months. Small team. A lot on the line.

The legacy system was reaching the end of its life with us.

That gave us a hard deadline to move the lending experience onto a new foundation without disrupting originations. New applications still had to come in. Existing applicants still had to move forward. Internal teams still needed to support customers. Partners still depended on the experience.

This wasn’t a redesign with a clean starting point and a neat launch at the end. It was product, design, engineering, compliance, and operations working through dozens of dependencies at once while keeping the existing business moving.

*02 / The tension*

## Every decision had to hold two clocks.

Where the product needed to go next, and what the business needed to keep working today.

- **A fixed date:** About nine months. The deadline did not move.
- **A live business:** Applicants, support, and partners could not pause while the foundation was replaced.
- **A small team:** Scope had to be a product decision, not a list of everything that would be nice to finish.

*03 / My role*

## The work lived in the spaces between teams.

Change the foundation without making customers carry the complexity.

**Product owner**

I helped define requirements, sequence the work, write stories, coordinate dependencies, and make scope calls.

**Designer**

I was responsible for how those decisions showed up for customers, often before there was anything to design.

A technical constraint becomes an experience state. An experience decision creates an engineering dependency. A timeline decision becomes a scope decision. A support concern becomes a routing rule.

*04 / The moves*

## Protect the foundation first. Improve from there.

1. Rebuild while the business is still running

The old experience expected an immediate response. The new foundation did not always work that way. We had to design what happened when the system was still processing, when information arrived later than expected, and when a customer could safely leave and come back.

2. Authentication, rebuilt with the funnel

Applicants were being asked to create and remember a password in the middle of an already demanding financial process. One-time codes became the primary path, and password creation was removed from offer selection. I later introduced Magic Link as another way back in. We built and shipped it, then left it off the main funnel because one-time codes were already working. It found a clearer home in the co-branded sign-in experience.

3. Leave historical documents out of the first cutover

Moving them would have expanded the migration considerably without changing the customer journey we needed to protect for launch. We left them out and created an operational path for teams who still needed access.

4. Test the whole system, not the screens

As launch approached, I joined the team onsite for end-to-end testing, moving through the funnel as a customer would and documenting where system behavior, business rules, and the intended experience stopped lining up.

#### What I chose not to do

- **Stop the funnel and rebuild quietly.** Applications, support, and partners still depended on the experience.
- **Magic Link on the main funnel.** One-time codes were already working. The capability shipped in the co-branded sign-in experience instead.
- **Historical documents in the first release.** They would have widened the migration without protecting the journey we needed at launch.

*05 / What changed*

## The foundation was replaced. The business kept moving.

- **2025: January cutover.** The migration finished inside the roughly nine-month window.
- **Async: Processing and fallback.** The top of the funnel was rebuilt for a system that does not always answer immediately.
- **Auth: A code, not a password.** One-time codes became the primary path. Magic Link shipped in the co-branded sign-in experience and stayed off the main funnel.

*In hindsight*

A small team replaced a critical part of the company’s foundation without stopping the business that depended on it.

### Necessary friction

Not every step is bad. The job is knowing which ones are doing useful work. One-time codes stayed because they were working. Magic Link was built, then held to the co-branded sign-in experience.

### The gaps between systems

Some of the most important work happened onsite, in the small gaps where system behavior, business rules, and the intended experience stopped lining up.

### What this says about how I work

I’m most useful when the problem is bigger than the screen. This required design judgment, product judgment, technical understanding, and comfort with imperfect information.

---

*Case 02 of 08 · Systems*
*Happy Money / HIVE / 2021–2023*
# Moving money was the *easy part.*

Happy Money had a capital problem hiding inside an operational one. Loan participations still moved through spreadsheets, file exchanges, email, and hand reconciliation. Happy Money acquired Fiscal Hive to change that. I was the sole product designer who turned that technology into HIVE.

### At a glance

- **The problem:** Loan participations relied on fragmented processes across spreadsheets, file transfers, email, third-party systems, and manual reconciliation.
- **The opportunity:** Bring the participation lifecycle onto one platform while preserving the checks, transparency, and human judgment required to move money responsibly.
- **My role:** Sole product designer across buyer, seller, and Happy Money admin experiences.
- **The product:** An enterprise loan-participation platform connecting pool creation, due diligence, fractional allocation, agreements, transaction management, and servicing data.
- **The design principle:** Automate the work. Make the rules visible. Preserve the decision.

The story covers the spreadsheet risk, why the rules existed, three jobs on one transaction, Project BEE, due diligence as confidence, navigation without a tour guide, automation with the decision preserved, compliance as a design material, progressive disclosure of the loan tape, visible system changes, partner roundtables, deprioritizing the acquired loss model, the shift from broker to ledger, and the move from extract-and-reconcile to review, investigate, decide.

### The closer

I wasn’t designing screens for a complicated financial process. I was designing the trust layer between people, institutions, and the system moving their money.

---

*Case 03 of 08 · Clarity*
*Happy Money / Verification / 2026*
*Coming soon*
# From document upload to intelligent verification.

Uploading the file was only the first step.

With Gemma 4.0, the verification flow can classify an uploaded document and determine whether it should be accepted, rejected, or sent forward for additional review.

That creates an opportunity to give applicants feedback much earlier in the process instead of waiting for an operations team to review every submission.

Manual review still matters, especially for documents the system cannot confidently resolve. But the model gives us a faster first pass and creates a path toward real-time feedback.

The goal isn’t to remove people from verification. It’s to use automation where it can help, and reserve manual review for the places that actually need it.

- **Role:** Lead designer
- **Story:** Real-time verification
- **Outcome:** Real-time verification. AI-assisted classification at upload. Gemma 4.0 can classify, accept, or reject documents as they’re submitted, creating a path toward immediate applicant feedback while keeping manual review in the loop.

---

*Case 04 of 08 · Systems*
*Happy Money / Happy Objects 3.0 → 4.0 / 2026*
# The brand changed. The product couldn’t afford to change one screen at a time.

Happy Money was preparing for a major visual reset.

The new brand was warmer, sharper, and more grown up. Persimmon replaced the old pinks. Midnight introduced a deeper functional base. Linen softened the surfaces around them.

On paper, it was a brand update.

Inside the product, it was something much bigger.

Years of independently built experiences had left Happy Money with multiple implementations of the same components, hardcoded styling, one-off overrides, and inconsistent patterns spread across the application funnel, servicing experience, and internal product surfaces.

Changing the brand meant touching nearly everything.

And doing that manually would have taken far too long.

### At a glance

- **The problem:** The product was not built to absorb a system-wide visual change. Every color, spacing rule, component state, and implementation risked becoming its own migration task.
- **Why it mattered:** Brand work could not become a multi-year product rewrite. We needed a way to modernize the experience without slowing down the roadmap around it.
- **My role:** I led the design-system work across Happy Objects 3.0 and the evolution toward 4.0, partnering with design and engineering to standardize the foundation, define the new visual system, and rethink how future changes could propagate through the product.
- **What changed:** We moved from fragmented, screen-level styling toward a shared architecture of primitives, semantic tokens, reusable components, and system rules that could support automated transformation.
- **The result:** Instead of treating the rebrand as hundreds of individual redesigns, we built a system capable of carrying the change for us.

- **Role:** Design lead
- **Timeframe:** 2026
- **Team:** Design / Engineering
- **Outcome:** Change got cheaper. Happy Objects 3.0 standardized the product. Happy Objects 4.0 made that standardization programmable.

*01 / One language*

## First, we had to make the product speak one language.

Before Happy Objects 3.0, the same visual idea could exist in several forms.

A button might look nearly identical in two experiences while being implemented completely differently underneath. Colors lived as hardcoded values. Spacing rules varied by team. Component behavior could drift depending on where it had been built.

The problem was not simply inconsistency. It was leverage.

There was no reliable way to change one decision and know that the rest of the product would follow.

So before we could rethink the brand, we had to rethink the foundation.

*02 / System rules*

## Happy Objects 3.0 turned individual decisions into system rules.

The goal of 3.0 was not to redesign a handful of screens. It was to create the infrastructure behind roughly 125 product surfaces.

We consolidated component patterns, standardized spacing, established primitives and semantic tokens, and moved recurring visual decisions out of individual screens and into a shared system.

Buttons, inputs, selectors, transaction patterns, navigation, typography, spacing, and states began to inherit from the same source of truth.

Instead of “This button is coral,” the system could say “This is the primary action color.” Instead of “This spacing is 24 pixels,” it could say “This is the standard spacing between related sections.”

The difference sounds small. It changed everything that came next.

*03 / The rebrand*

## Then the rebrand arrived.

By the time the new identity began taking shape, we were no longer looking at the product as a collection of screens. We could see it as a network of relationships.

Persimmon did not simply replace pink. It needed to inherit the right role.

Midnight was not just a new dark blue. It had to understand where it functioned as a surface, where it acted as a foreground, and how components behaved when placed on top of it.

Linen was not just another cream. It had to work as part of a complete neutral scale across surfaces, dividers, disabled states, and subtle hierarchy.

That turned the work from visual replacement into system translation. And that is where Happy Objects 4.0 began.

*04 / The question*

## We stopped asking, “What should this screen look like?”

We started asking, “What rule should make every screen behave correctly?”

That change in framing opened the door to automation. Because the product had already been normalized around shared tokens and component patterns, many of the most repetitive parts of migration could now be handled programmatically.

Instead of manually finding every instance of a legacy color, we could map old token roles to new ones. Instead of writing every component-state combination by hand, we could generate and validate those variations against defined rules. Instead of relying entirely on visual QA to catch inconsistencies after implementation, we could use automated comparison and regression workflows to surface mismatches earlier.

AI became useful here not as a replacement for design judgment, but as a force multiplier. The system made the rules legible. AI helped us apply them faster.

*05 / The graph*

## One rebrand. Hundreds of downstream decisions.

A single palette change touched much more than color. A primary action needed default, hover, focus, pressed, and disabled states. A dark surface changed the contrast requirements for text, icons, controls, and borders. A new neutral system affected cards, inputs, backgrounds, separators, and information hierarchy. And every one of those decisions needed to hold up across desktop and mobile.

In a screen-by-screen workflow, this becomes a checklist. In a design system, it becomes a dependency graph. We designed for the graph.

*06 / Shipping change*

## The system began doing work the team used to do manually.

Token mappings could translate legacy roles into the new visual language. Component variants could inherit those new values without each implementation being individually redesigned. Automated visual checks could flag contrast issues and unexpected deviations before they became production defects.

The work shifted from find → redesign → implement → inspect → fix to define → propagate → validate.

That was the real evolution from Happy Objects 3.0 to 4.0. Not a prettier component library. A different way of shipping change.

*07 / Optionality*

## The payoff was speed, but the bigger win was optionality.

The immediate benefit was obvious: a migration that could have stretched across a much longer implementation window could be compressed dramatically. The more important outcome was what happened after the rebrand. Future product teams no longer had to make the same foundational decisions over and over.

The answers increasingly lived in the system instead of in someone’s memory.

*08 / What changed*

- **~125: Product surfaces** could inherit from a more consistent system foundation.
- **82: Semantic CSS tokens** created a shared language between design intent and implementation.
- **18: Component families** moved toward standardized, reusable behavior.
- **94: Icons** were consolidated into a scalable visual library.

Styling-related QA issues, which had represented a meaningful portion of front-end friction, became something we could address at the system level instead of repeatedly at the feature level.

### The part I’m most proud of

It wasn’t the rebrand. It was making the next rebrand easier.

Happy Objects started as an effort to bring consistency to the product. It became infrastructure for change. By separating visual decisions from individual implementations, we created a foundation that could evolve without forcing every team to start over.

And once that foundation existed, AI could finally be useful in a meaningful way. Not because it knew what the product should look like. Because we had already designed the rules well enough for the system to act on them.

### Outcome

Happy Objects 3.0 standardized the product. Happy Objects 4.0 made that standardization programmable. The result was a design system that did more than keep the product visually consistent. It made change cheaper.

---

*Case 05 of 08 · Trade-offs*
*Happy Money / Partner offer / 2026*
# A new choice at the finish line, without slowing anyone down.

A partner’s payment-protection product needed a place at the very end of the loan application. I designed a short, optional step for eligible borrowers that left everyone else’s path to funding untouched, and shipped it in a week inside the partner’s review process.

### At a glance

- **The problem:** A new offer had to fit at the end of a long application without adding friction for anyone.
- **Why it mattered:** Friction at the finish line can cost funded loans, the outcome everything else depends on.
- **My role:** Lead designer for the full sequence, its fall-through for ineligible borrowers, and the partner approval cycle.
- **What I changed:** A short, optional step that reuses a pattern borrowers already learned earlier in the application.
- **The result:** Shipped in a week, with no disruption to the path to funding.

- **Role:** Lead designer
- **Timeframe:** Spring 2026
- **Team:** Product / Eng / Partner
- **Outcome:** No disruption to funding

*Coverage selection within the partner payment-protection experience.*

*01 / The situation*

## A new choice at the end of a long journey.

Borrowers reach this point having just finished an application.

The goal was to introduce optional protection without making the end feel longer, and without changing anything for people who weren’t eligible or interested.

*02 / The tension*

## Two owners, one experience.

The partner owned the product, the language, and the disclosures. We owned the journey.

- **Partner review:** Copy and disclosures went through the partner’s approval process and timeline.
- **Speed:** A one-week build.
- **Eligibility:** Only some borrowers could see it; everyone else had to pass through untouched.
*03 / My read*

## Make the new feel familiar.

Borrow a pattern people had already learned, so nothing is new at the last step.

**The obvious read**

### Design a new moment for a new offer.

**My read**

### Reuse the offer-selection pattern, so the last step feels like the ones before it.

*04 / The moves*

## Optional, familiar, and easy to skip.

1. A short sequence

Introduce, choose coverage, review, confirm.

2. A clean fall-through

Ineligible borrowers go straight to their confirmation.

3. Design to the partner’s calendar

Planned around their review cycle, keeping the experience consistent as their content changed.

#### What I chose not to do

- **Repeating an unverified number.** An early adoption figure didn’t hold up when we checked it again, so we set it aside.
*05 / What changed*

## What it showed.

- **1 week: Designed and shipped.** A short, optional sequence added to a working product.
- **0: Disruption to funding.** Borrowers who skipped it moved through exactly as before.
- **→: Ready to return.** Paused, with the design intact for when the partnership resumes.
*In hindsight*

When someone else owns part of the experience, their process becomes part of the design.

### What’s next

A second phase is designed and waiting on the partner’s approval.

---

*Case 06 of 08 · Iteration*
*Happy Money / Bank linking / 2025–2026*
# No dead ends when a connection breaks.

When a member’s bank connection expired, autopay failed silently, and people found out from a missed payment. I led design on a re-link experience that fixes it in place, and helped set the principle the team built around: no dead ends.

### At a glance

- **The problem:** Expired bank connections broke autopay without warning, and re-linking meant starting setup over.
- **Why it mattered:** Missed payments meant fees for members, support tickets for the team, and lost trust.
- **My role:** Design lead within a shared effort. I designed the end-to-end re-link flow; a teammate designed the error state, and engineering built the retry logic.
- **What I changed:** Members see the problem in context and re-link in place, with their autopay intact.
- **The result:** Working across design and engineering, bank-link completion rose from 53.2% to 62.9%, a 9.7-point team result.

- **Role:** Design lead, shared effort
- **Timeframe:** Aug 2025 → Apr 2026
- **Team:** Product / Eng / Design
- **Outcome:** +9.7pp bank-link completion

*Bank-link recovery with a clear path to continue.*

*01 / The situation*

## Autopay failed quietly.

Nobody knew a connection had expired until a payment bounced.

Applicants had the mirror problem: they were asked to link accounts again even when valid connections already existed.

*02 / The tension*

## Engineering could see the break. Members couldn’t.

The fix lived in a moment of experience, not in the API.

- **A fragile step:** Bank linking is where about a quarter of applicants used to drop.
- **Two products:** The same problem showed up in servicing and in the application, owned by different teams.
- **Noisy errors:** Many connection errors are temporary and resolve on their own.
*03 / My read*

## Silence is a defect.

If someone can get stuck, they need a path forward, and we need to know about it.

We wrote it into the acceptance criteria, so it outlived any single screen.

“There is no dead-end state; the borrower always has a path forward.”

*04 / The moves*

## Detect it, say it, fix it in place.

1. Re-link in context

A prompt at the right moment, and a re-link that keeps autopay settings.

2. Carry the pattern into the application

The same pattern, paired with retry logic that handles temporary errors before asking anything of the applicant.

3. Make silence visible

An error that showed zero occurrences despite hundreds of confirmed failures was treated as a reporting bug, not a healthy flow.

#### What I chose not to do

- **A test to separate the pieces.** The re-link flow and retry logic shipped close together without an A/B test, so the lift is reported as a team result.
*05 / What changed*

## More linked accounts, everywhere downstream.

- **+9.7pp: Bank-link completion.** 53.2% → 62.9%, across about 7,000 applicants.
- **64.6%: Later window.** The gain held. Design’s re-authentication work and engineering’s retry logic shipped together.
- **→: Downstream.** More linked accounts, more autopay enrollments, fewer returned payments.
*In hindsight*

Some of design’s best work is a sentence in the acceptance criteria. “No dead ends” did more than any single screen.

### What I’d do differently

For returning applicants, engineering proposed the interaction model before design was in the room. Next time I’d push to be there earlier.

---

*Case 07 of 08 · Advocacy*
*Happy Money / Decline experience / 2025*
# A decline shouldn’t be a dead end.

A declined application still belongs to a person looking for a way forward. I designed a partner referral that brought alternatives, consent, and disclosures into the same path, and held the line on keeping it simple.

### At a glance

- **The problem:** A declined application ended with nothing for the person and nothing for the business.
- **Why it mattered:** Declines are common. A dead end loses goodwill and a chance to help.
- **My role:** Lead designer for the decline and referral experience, including its consent and disclosure pattern.
- **What I changed:** A referral to a partner who might help, with consent built in and a short redirect.
- **The result:** A reusable referral pattern that now powers refinance offers.

- **Role:** Lead designer
- **Timeframe:** 2025 → Jan 2026
- **Team:** Product / Eng / Partner legal
- **Outcome:** Reusable referral pattern

*A decline referral with partner options and a path forward.*

*01 / The situation*

## Nothing of value on the way out.

A decline ended the conversation.

The industry pattern is a decline waterfall: refer the person to a partner who might be able to serve them.

*02 / The tension*

## A partner’s caution versus a person’s patience.

The partner’s legal team wanted an opt-in checkbox on the hand-off.

- **Compliance:** Consent and disclosures had to be right.
- **Emotion:** The person had just been told no.
- **Time:** The negotiation stretched through the holidays.
*03 / My read*

## Protect the person with the least patience left.

One more checkbox costs the most for someone who was just declined.

**The obvious read**

### A decline is the end of the application.

**My read**

### A decline is a hand-off to another way forward.

*04 / The moves*

## Lead with what’s possible.

1. Next step first

What the partner can offer comes first; the decline comes second.

2. Consent without a checkbox

Handled in the disclosure pattern instead.

3. Built for more partners

An extensible pattern the decline waterfall now relies on.

#### What I chose not to do

- **An opt-in checkbox.** Friction for the person least able to absorb it. Product and design held the line.
*05 / What changed*

## Volume moves. The pattern stays.

- **5,099: Users, month one.** On refinance offers built on this pattern.
- **0: Extra checkboxes.** Consent without added friction.
- **→: Extensible.** Each new partner reuses the pattern.
*In hindsight*

Volume on any one surface fluctuates. A good pattern keeps paying for every partner after it.

### Why traffic fell

Decline volume dropped as approvals improved, and the strategy moved to refinance offers on the same pattern.

---

*Case 08 of 08 · Speed + measurement*
*Happy Money / Member portal / 2026*
# A blank file to a measured launch in 29 days.

Many members are homeowners carrying high-rate debt, and a partner could help, but Happy Money doesn’t make home-equity loans. I designed how the offer reaches the right members inside the portal, clearly co-branded, with its success metric written down before launch.

### At a glance

- **The problem:** A partner offer needed to reach the right members without misrepresenting who the lender is.
- **Why it mattered:** A new revenue stream, and a first test of how the portal carries partner offers.
- **My role:** Lead designer for five surfaces, the disclosure copy, and the decisions behind placement.
- **What I changed:** A set of portal surfaces sharing one co-brand and disclosure, placed where members already go.
- **The result:** Live in 29 days; 3.22% first-week click-through against a 3.00% plan.

- **Role:** Lead designer
- **Timeframe:** Aug 12 → Sep 10, 2026
- **Team:** Product / Eng / Marketing / Partner
- **Outcome:** 3.22% CTR vs 3.00% plan
*01 / The situation*

## A new offer in a familiar place.

Members already visit the portal to manage their loans.

*02 / The tension*

## Speed, honesty, and the right audience.

Four weeks, a partner’s brand, and an offer that already competed for space.

- **Who’s the lender:** The partner lends, not Happy Money, and the design had to make that unmistakable.
- **Competing offers:** A refinance offer already lived on the dashboard.
- **Four weeks:** From a blank file to launch.
*03 / My read*

## Decide the audience before the pixels.

Start with members who still have a loan, keep v1 light, and write the success metric down first.

*04 / The moves*

## A set of surfaces, not a banner.

1. Five surfaces

A splash, a dashboard banner that yields to the refinance offer, a navigation tile, a dismissed state, and mobile layouts.

2. Disclosure built in

The co-brand and lending disclosure are part of the composition. My disclosure copy was reused by the email team.

3. Ready for the next offer

Eligibility is decided once, upstream, so the portal only decides what to show, and the next offer can reuse these surfaces.

#### What I chose not to do

- **Paid-off messaging, for now.** Retired mid-flight when the audience was set, and kept for later.
*05 / What changed*

## The first surface with its metric written down before launch.

- **3.22%: Click-through, week one.** 84 of 2,611 viewers, against a 3.00% plan.
- **330–490: New viewers a day.** Steady, not a launch spike.
- **29: Days, blank file to live.** Shared, revised with the partner, and matched to Figma in QA.
*In hindsight*

Write the success metric down before launch. It’s the habit the rest of my work had been asking for.

### An honest read

Seven days is a first read. The plan was itself an assumption, so “on plan” means the assumption survived.

---

*Graduate project · 2020*
*MAMA / Managing and Mitigating Anxiety*
# A more empathetic wearable for expectant mothers.

Black women are fighting to be heard in a healthcare system that often ignores them, and pregnancy brings anxiety on top of it. I designed an ecosystem that keeps moms-to-be connected to midwives and doulas, and shows the pattern instead of every reading.

### At a glance

- **The problem:** Black women are fighting to be heard in a healthcare system that often ignores them, and pregnancy brings anxiety on top of it.
- **Why it mattered:** A product that watches every minute can make the anxiety worse. The experience had to support care without turning pregnancy into a feed of alarms.
- **My role:** Solo, end to end: market research, personas, journey mapping, flows, and the final design.
- **What I changed:** A wearable, a mobile app, and a provider dashboard that keep moms-to-be connected to holistic care providers like midwives and doulas.
- **The result:** Moms see aggregated data, not minute-by-minute readings, so the product eases anxiety instead of feeding it.

- **Role:** Solo designer
- **Timeframe:** 2020
- **Team:** Independent
- **Context:** Graduate school

*A concept for the wearable, the app, and the provider dashboard. Designed alone, from discovery to the final concept.*

*01 / The situation*

## Heard less, watched more.

Black women are fighting to be heard in a healthcare system that often ignores them.

Pregnancy adds anxiety on top of that. A wearable that reports every change can make the waiting feel louder, not safer.

*02 / The call*

## Show the pattern, not every reading.

The call I’d defend: moms see aggregated data, not minute-by-minute readings.

The product should ease anxiety instead of feeding it. Care providers still see what they need. The mother isn’t asked to interpret a stream of numbers alone.

*03 / The move*

## Three surfaces, one circle of care.

A wearable, a mobile app, and a provider dashboard.

1. The wearable

Collects what matters through the pregnancy, without asking the mother to watch it minute by minute.

2. The app

Shows aggregated data, so the experience supports her instead of raising the alarm on every change.

3. The provider dashboard

Keeps moms-to-be connected to holistic care providers like midwives and doulas.

*04 / What changed*

## Designed to ease the anxiety, not add to it.

*The call I’d defend*

Moms see aggregated data, not minute-by-minute readings, so the product eases anxiety instead of feeding it.

---

# Shorter stories

These are on the case studies page as summaries. They do not have their own pages.

## One application where there used to be two.

*Digital lending experience*

- **The problem:** Applicants had to get through a loan application and a separate credit union membership application, two flows with two sets of questions.
- **My role:** Interaction designer. I led blending the loan and membership applications into one experience and folded usability-test findings back into the flows.
- **The move:** One journey instead of two, with external integrations designed into the existing experience and a growing design system underneath.
- **The result:** 17% less time to complete the loan application. In phase 7, the team also delivered five integrations and 17 usability enhancements.

## Design the impact, not the product.

*Connected auto-injector*

- **The problem:** A client wanted a connected companion app for an auto-injector, and was thinking in features.
- **My role:** Interaction designer with a principal designer, an associate design director, and a visual designer. I owned research, ideation, wireframes, flows, synthesis, and motion.
- **The move:** Three weeks of immersion and nearly 1,000 pages of client research, synthesized into a care journey that shifted the focus from features to people’s needs, then a prioritization workshop to choose where to focus.
- **The result:** An experience vision, narrative, and hero-flow screens, plus an executive summary for the client’s next planning steps.

## Debt payoff in small, human-sized steps.

*Stretch*

- **The problem:** Sticking with a debt-payoff plan is hard, and life keeps getting in the way.
- **My role:** A short stint on a frog venture heading to limited launch: I helped define its core structure and the onboarding for first-time users.
- **The move:** Bite-sized tasks anchored in what motivates each person, so progress feels within reach.
- **The result:** An onboarding experience and an overall approach to task flows for the launch.

## Tools that let marketing publish in frog’s voice.

*frog editorial visual system*

- **The problem:** frog’s marketing team needed to produce editorial and branded content at a higher visual standard, on its own.
- **My role:** Interaction designer, working as an IC with a visual designer. Together we ran discovery and set the visual direction; I defined all motion and interaction patterns. Aitor, the project’s Design Director, guided delivery.
- **The move:** A component system with guidance, so marketing could assemble editorial and branded content on its own, with motion and interaction built into the system.
- **The result:** Resources that helped frog extend its communication globally, including the Chief Challenges content area.
