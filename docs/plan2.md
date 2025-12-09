# Sprint 2 Development Plan: Advanced Functionality & Enhanced Design

**Date**: 2025-12-03  
**Goal**: Implement advanced CSS features, animations, and enhanced responsive design  
**Time Estimate**: 3-4 hours

---

## Overview

Building upon Sprint 1's foundation, Sprint 2 focuses on:
- CSS Custom Properties (tokens) for design system
- Advanced animations and scroll effects
- Enhanced typography system
- More interactive components
- Professional polish

---

## Key Features to Implement

### 1. **Design Tokens System** (CSS Custom Properties)
Following the professor's approach, create a comprehensive token system for:
- Colors (with dark mode support)
- Spacing scale
- Typography scale
- Shadows
- Border radius
- Transitions

### 2. **Advanced Animations**
- Scroll-triggered animations (Intersection Observer API)
- Staggered animations for cards
- Smooth hover effects
- Loading animations
- Parallax effects in hero

### 3. **Enhanced Components**
- Skills section with animated progress bars
- Timeline/Experience section
- Testimonials carousel (optional)
- Back-to-top button
- Enhanced project cards with modals

### 4. **Dark Mode Toggle**
- CSS custom properties for theming
- JavaScript toggle with localStorage
- Smooth transition between modes

### 5. **Improved Responsive Design**
- Container queries (where supported)
- Better mobile navigation
- Optimized touch interactions

---

## Step-by-Step Implementation Plan

### **Task 1: Create Design Tokens System** (30 min)

#### What we'll do:
Create a comprehensive CSS custom properties system

#### Files to create/modify:
- Create: `assets/css/tokens.css`
- Create: `assets/css/animations.css`
- Modify: `assets/css/style.css` (import tokens)
- Modify: `index.html` (add new CSS files)


---

### **Task 2: Implement Scroll Animations** (45 min)

#### What we'll do:
Create smooth scroll-triggered animations using Intersection Observer

#### Files to create/modify:
- Create: `assets/js/animations.js`
- Modify: `index.html` (add script)
- Modify: `assets/css/animations.css`

#### Animation types:
- **Fade in from bottom**
- **Fade in from sides**
- **Scale up**
- **Stagger children** (for grids)




### **Task 3: Create Skills Section** (30 min)

#### What we'll do:
Add an animated skills section with categories

#### Files to modify:
- `index.html` (add new section after About)

#### Features:
- Skill categories (Frontend, Backend, Tools, etc.)
- Animated skill bars or cards
- Icons for each skill (using emoji or SVG)
- Responsive grid layout

---

### **Task 4: Implement Dark Mode Toggle** (45 min)

#### What we'll do:
Add dark mode with toggle button and localStorage persistence

#### Files to create/modify:
- Create: `assets/js/theme.js`
- Modify: `index.html` (add toggle button)
- Modify: `assets/css/tokens.css` (add dark theme variables)

#### Dark mode features:
- Toggle button in navigation
- Smooth transition between themes
- Saves preference to localStorage
- Respects `prefers-color-scheme`



### **Task 5: Enhanced Project Cards** (40 min)

#### What we'll do:
Improve project cards with better interactions

#### Features to add:
- Hover overlay with project details
- Tags/technologies used
- "View More" modal or expanded view
- Filter projects by category (optional)

#### Files to modify:
- `index.html` (enhance project section)
- `assets/css/style.css` (card styles)
- `assets/js/main.js` (modal functionality)

---

### **Task 6: Add Back-to-Top Button** (20 min)

#### What we'll do:
Floating button that appears on scroll

#### Features:
- Shows after scrolling down 300px
- Smooth scroll to top on click
- Animated entrance/exit

---

### **Task 7: Parallax Hero Effect** (30 min)

#### What we'll do:
Add subtle parallax scrolling to hero section



### **Task 8: Create Experience/Timeline Section** (30 min)

#### What we'll do:
Add a timeline section for experience or education

#### Features:
- Vertical timeline with dots
- Cards for each entry
- Dates and descriptions
- Animated on scroll

---

### **Task 9: Improved Mobile Navigation** (30 min)

#### What we'll do:
Enhanced mobile menu with better UX

#### Features:
- Animated hamburger icon (transforms to X)
- Slide-in menu animation
- Backdrop overlay
- Close on link click or outside click

---

### **Task 10: Performance & Polish** (20 min)

#### What we'll do:
- Optimize CSS (remove unused Tailwind classes if any)
- Add loading states
- Ensure smooth 60fps animations
- Test all breakpoints
- Verify accessibility features

---

## File Structure After Sprint 2
```
portfolio-template-2025/
├── assets/
│   ├── css/
│   │   ├── tokens.css        ← NEW: Design system
│   │   ├── animations.css    ← NEW: Animation utilities
│   │   └── style.css         ← UPDATED: Main styles
│   ├── js/
│   │   ├── main.js           ← UPDATED: Core functionality
│   │   ├── animations.js     ← NEW: Scroll animations
│   │   └── theme.js          ← NEW: Dark mode
│   └── images/
├── docs/
│   ├── plan1.md
│   └── plan2.md              ← THIS FILE
├── index.html                ← UPDATED: New sections
├── 404.html
├── README.md
├── LICENSE
└── .gitignore
```

---

## Success Criteria

✅ **Sprint 2 Complete When:**
1. Design tokens system implemented and working
2. Scroll animations functional on all sections
3. Dark mode toggle working with persistence
4. Skills section added with animations
5. Enhanced project cards with interactions
6. Back-to-top button functional
7. Parallax effect in hero
8. Experience/timeline section added
9. Mobile navigation improved
10. All changes committed and deployed to GitHub Pages

---




## Resources & References

- Professor's template: https://github.com/ruvebal/creative-portfolio-template
- CSS Custom Properties: https://developer.mozilla.org/en-US/docs/Web/CSS/--*
- Intersection Observer: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
- Dark mode best practices: https://web.dev/prefers-color-scheme/

---

## Next Steps (Sprint 3)

After Sprint 2, we'll focus on:
- Advanced CSS techniques (glassmorphism, neumorphism)
- Form validation and Formspree integration
- Performance optimization
- SEO improvements
- Social media integration

---

## Implementation Notes

### Session 1 (2025-12-03)
- Created `assets/css/tokens.css` file
- Created `assets/css/animations.css` file
- Updated `index.html` with CSS links
- Added JavaScript script references
- Documented plan in `docs/plan2.md`

**Next**: Begin implementing design tokens system in `tokens.css`

---

**End of Plan 2**