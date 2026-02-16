# h003 LSM Experiment: Customer Intel Briefs

**Landing Page:** https://briefs.voder.ai
**Date:** 2026-02-16

---

## Hypothesis

**Customer:** Indie SaaS founders (pre-PMF, <$10k MRR)
**Problem:** Can't find where their target customers hang out online
**Solution:** Monthly customer intel briefs with verified threads, influencers, and engagement recommendations

**Full hypothesis statement:**
> Indie SaaS founders will pay $39/month for a done-for-you customer intel brief that shows them exactly where their target customers hang out, what they complain about, and how to engage.

---

## Riskiest Assumption

**RA1:** Founders will trust the brief quality enough to pay (vs "I'll just use ChatGPT")

**Why this is riskiest:**
- Free alternatives exist (ChatGPT, manual research)
- No brand recognition
- Service is intangible until delivered
- "Done-for-you research" is a new category

**Secondary assumptions (test later):**
- Founders can find us (distribution)
- $39/mo is the right price point
- Monthly cadence is right (vs weekly/quarterly)

---

## Experiment

**Type:** Landing page with waitlist → free sample → paid conversion

**Method:**
1. Drive traffic to landing page via IH/Reddit engagement
2. Collect waitlist signups via Formspree
3. Deliver free sample brief to signups
4. Track conversion to paid ($39/mo via Ko-fi)

**Duration:** 2 weeks (ends 2026-03-02)

---

## Success Criteria

### Pass Threshold (Validate RA1)
**1 paid customer within 2 weeks**

This validates:
- Someone trusts the quality enough to pay
- The price point isn't a blocker
- The value proposition is clear

### Signal Thresholds (Weaker Validation)
| Metric | Weak Signal | Strong Signal |
|--------|-------------|---------------|
| Waitlist signups | 5 | 15 |
| Sample brief requests | 2 | 5 |
| Payment page visits | 1 | 3 |
| Conversion to paid | 0 | 1+ |

### Fail Criteria
- 0 waitlist signups after 50+ landing page visits = messaging fail
- 5+ sample briefs sent, 0 positive feedback = product fail
- 5+ payment page visits, 0 conversions = price/trust fail

---

## Measurement

### Tracking Setup
- **Landing page views:** GitHub Pages doesn't track (need to add analytics or infer from waitlist)
- **Waitlist signups:** Formspree notifications to voder.ai.agent@gmail.com
- **Sample requests:** Email replies
- **Payments:** Ko-fi notifications

### Daily Check
Track in `h003-landing/metrics.md`:
```
Date | Views (est) | Signups | Samples Sent | Paid
2026-02-16 | - | 0 | 0 | 0
```

---

## Pivot Criteria

**If we fail (0 paid after 2 weeks):**

1. **Messaging pivot:** Test different value props (speed? specificity? done-for-you?)
2. **Price pivot:** Test $19/mo (lower barrier) or $99/mo (premium positioning)
3. **Format pivot:** One-time report vs subscription
4. **Channel pivot:** Different customer segment (agencies? content marketers?)

**If we get weak signal (signups but no paid):**
- Interview signups: "What would make you pay?"
- Check objections: price? trust? timing?

---

## Current Status

**Phase:** Pre-launch (waiting for Tom's approval to share)
**Blockers:** None
**Next action:** Start outreach to drive traffic

---

*Review this document at each heartbeat. Update metrics daily.*
