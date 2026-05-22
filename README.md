# Payal Kar Dutta – Personal Authority Website

Premium single-page personal brand website built with **React + Tailwind CSS v4 + Framer Motion**.

## Design Choices

- **Color Palette**: Deep charcoal/obsidian dark theme with warm gold (#C9A84C) accents — premium luxury real estate feel
- **Typography**: Cormorant Garamond (serif, editorial) + Outfit (sans-serif, modern) pairing
- **Aesthetic**: Luxury editorial — sparse, confident, high white space, no generic templates

## Sections

1. **Navbar** – Sticky, blur backdrop, smooth scroll links, mobile hamburger menu
2. **Hero** – Full-screen split layout, animated text + image, live stats overlay
3. **About** – Bio text + stat cards with gold accent borders
4. **Journey** – 3-column milestone grid
5. **Leadership** – Quote block + 4-pillar grid
6. **Achievements** – 4-card horizontal stats grid with hover effects
7. **Veva Realty** – Dual brand blocks + services grid + background VEVA watermark
8. **Contact** – Info panel + working form with success state
9. **Footer** – 3-column layout with links and social

## Setup

```bash
# 1. Create Vite project (if starting fresh)
npm create vite@latest payal-authority -- --template react
cd payal-authority

# 2. Install dependencies
npm install
npm install framer-motion react-icons
npm install -D tailwindcss@next @tailwindcss/vite@next

# 3. Replace all files with the provided source files

# 4. Run dev server
npm run dev

# 5. Build for production
npm run build
```

## Folder Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Journey.jsx
│   ├── Leadership.jsx
│   ├── Achievements.jsx
│   ├── VevaSection.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Customization

- Replace hero image URL in `Hero.jsx` with actual Payal's photo
- Update stats numbers in `Hero.jsx` and `Achievements.jsx`
- Add real social media links in `Footer.jsx`
- Connect contact form to backend/EmailJS/Formspree
- Add Calendly embed in `Contact.jsx` (replace form with Calendly inline widget)

## Calendly Integration (optional)

In `Contact.jsx`, replace the form with:
```jsx
<div style={{ minWidth: '320px', height: '700px' }}>
  <iframe
    src="https://calendly.com/YOUR_CALENDLY_LINK"
    width="100%"
    height="100%"
    frameBorder="0"
  />
</div>
```
