# SilkRoute Freight Calculator

A responsive single-page freight cost calculator built with Next.js.

## Live Demo

https://silkroute-psi.vercel.app/

## Features

- Gross weight and volume input
- Local documentation fee toggle
- Real-time freight cost calculation
- Chargeable CBM comparison
- Clear calculation breakdown
- Form validation with edge-case handling
- Fully responsive (mobile + desktop)
- Smooth UI with subtle animations

## Calculation Logic

- Weight CBM = Gross Weight ÷ 500
- Chargeable CBM = max(Weight CBM, Actual Volume)
- Freight Cost = Chargeable CBM × $265
- Documentation Fee = $150 (if selected)
- Total Cost = Freight Cost + Documentation Fee

## Route

Guangzhou → Jebel Ali

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Run Locally

```bash
git clone https://github.com/muhammed-sinan-200/silkroute.git
cd silkroute
npm install
npm run dev