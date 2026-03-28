# PRD: سيكولوجية البيع وعقلية التاجر المحلي + تجهيز البنية التحتية

## Course Title
**سيكولوجية البيع وعقلية التاجر المحلي ثم تجهيز البنية التحتية**
Psychology of Selling & Local Merchant Mindset + Infrastructure Setup

## Course Overview
An interactive web-based presentation module for Fazti Academy covering the fundamentals of sales psychology, marketing formulas, and digital infrastructure tools for local merchants in Algeria. The module follows the same premium dark-theme aesthetic established in the Graphic Design Fundamentals course.

## Brand Guidelines (Inherited)
- **Primary Colors**: Navy (#15173d), Purple (#982598), Pink (#e491c9), Cream (#f1e9e9)
- **Typography**: Cairo (Arabic), Inter (Latin), system fallbacks
- **Theme**: Tech-Noir / MasterClass aesthetic with glassmorphism, noise overlays, gradient accents
- **Libraries**: React, Framer Motion, Lucide React icons, TailwindCSS (utility-first)

---

## Slide Definitions

### Slide 1: ترسانة معادلات التسويق (Marketing Formulas Arsenal)
**Type**: Interactive 3D Carousel / Flip Card layout

**Visual Concept**: A card carousel where 5 marketing framework cards can be browsed sequentially. The active card is scaled up (1.0), while inactive cards are pushed to the sides with lower opacity and smaller scale.

**Content (5 Cards)**:

| # | Framework | Title (AR) | Steps |
|---|-----------|------------|-------|
| 1 | AIDA | قمع المبيعات الكلاسيكي | Attention → Interest → Desire → Action |
| 2 | PAS | سر الاستجابة المباشرة | Problem → Agitate → Solution |
| 3 | BAB | سحر التحول | Before → After → Bridge |
| 4 | FAB | تحويل الخصائص إلى قيمة | Features → Advantages → Benefits |
| 5 | 4Ps | بناء الثقة السريعة | Promise → Picture → Proof → Push |

**Interactions**:
- Next/Prev arrow buttons to cycle through cards
- Active card has elevated z-index, full opacity, scale(1)
- Inactive cards compressed to 0.85 scale, 0.4 opacity
- Keyboard arrow support inherited from viewer

---

### Slide 2: مندوب المبيعات الآلي (WhatsApp Business — The Automated Sales Rep)
**Type**: Split-screen layout — Chat Mockup + Feature Comparison

**Visual Concept**: Left side shows a CSS-rendered mobile phone mockup with animated chat bubbles popping in sequentially. Right side displays interactive feature cards comparing WhatsApp Normal ❌ vs WhatsApp Business ✅.

**Content**:
- Chat messages animate in with stagger delay (fade-in + slide-up)
- 4 hoverable feature cards:
  - 🛍️ Catalog — display products as mini-store
  - 🤖 Welcome Message — auto-reply while sleeping
  - 🏷️ Labels — customer classification (new order, confirmed, shipped, returns)
  - ⚡ Quick Replies — answer FAQs with one tap

---

### Slide 3: الكنز المجاني (Facebook Marketplace — The Free Treasure)
**Type**: Animated Equation / Funnel visualization

**Visual Concept**: A visual "equation" where 3 input blocks with `+` operators are animated one by one, culminating in a glowing result block. Below the equation sits a subtitle explaining the organic traffic concept.

**Equation**:
```
📸 صور واقعية   +   ✍️ عنوان جذاب   +   💵 سعر تنافسي   =   💰 أولى المبيعات
```

**Interactions**:
- Blocks appear step-by-step with staggered animation
- The result block glows with a pulsing gradient border
- CTA button triggers a "reveal" animation for the equation

---

## Technical Requirements
- All slides use `framer-motion` for animations and `lucide-react` for icons
- Each slide is a standalone React component in `src/courses/sales-psychology/slides/`
- The course viewer (`SalesPsychologyViewer.jsx`) follows the same pattern as `FaztyAcademyViewer.jsx`
- Route: `/course/sales-psychology`
- Must pass `npm run build` without errors

## File Structure
```
src/courses/sales-psychology/
├── prd.md
├── SalesPsychologyViewer.jsx
└── slides/
    ├── Slide1_MarketingFormulas.jsx
    ├── Slide2_WhatsAppBusiness.jsx
    └── Slide3_FacebookMarketplace.jsx
```
