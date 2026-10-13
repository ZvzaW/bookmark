# Bookmark - landing page

Task: build a responsive landing page using React, Webpack, Babel and Sass.

**Live demo:** https://bookmark-sigma-three.vercel.app

## Requirements checklist

- [x] Responsive layout for mobile and desktop
- [x] Hover and focus states for all interactive elements
- [x] Newsletter form shows an error when the input is empty or the email is invalid
- [x] Rounded blue background shapes built in CSS
- [x] SVG `fill` and `stroke` changed in CSS
- [x] Modal with the content of a features tab
- [x] Joined users countdown to 0 within 20 seconds of opening the page
- [x] Built with Webpack, Babel, Sass and React

## Tech stack

- [React 19]
- [Webpack 5] with [Babel]
- [Sass]
- [Zod] (`zod/mini`) - email validation
- [SVGR] - SVGs as React components, so their colours can be styled in CSS
- [ESLint] and [Prettier]

## Getting started

Requires **Node.js 22.15** or newer.

```bash
git clone https://github.com/ZvzaW/bookmark.git
cd bookmark
npm install
npm run build
npm run dev
```
