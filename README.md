# Practice Summary Dashboard

A clean, responsive dashboard showcasing dental practice performance metrics with real-time trends and actionable insights.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## What I Built

A dashboard card system that displays key metrics for dental practices:

- **Performance status** at a glance (High/Stable/At Risk)
- **6-month trend visualization** with an elegant bar chart
- **Smart recommendations** tailored to performance levels
- **Fully responsive** - looks great on all screen sizes

## How It Works

### Component Architecture

I broke down the card into focused subcomponents, each handling one specific piece:

- **Header** - Practice name and location
- **Status Indicator** - Performance badge
- **Metrics** - Key stats in a 2x2 grid
- **Trend Chart** - Visual representation of 6-month patient growth
- **Recommendations** - Actionable next steps based on conversion rates

### Smart Recommendations

The app analyzes conversion rates and suggests relevant actions:

- **High performers** (≥20%): Scale campaigns, expand services
- **At risk** (<10%): Optimize budget, improve landing pages
- **Stable** (10-20%): Test new creatives, review follow-ups

### Design Approach

- Clean, minimal aesthetic with semantic color coding
- Responsive grid layout: 3 cards on desktop, 1 on mobile
- Custom CSS bar chart (no external charting libraries)
- Smooth hover effects and transitions

## Tech Stack

- **React 19** with TypeScript for type safety
- **Vite** for fast development and building
- **Plain CSS** for styling (minimal and intentional)
- **Mock data** with 8 realistic dental practices

## Features

✅ 8 sample dental practices with varied metrics
✅ Responsive design (mobile, tablet, desktop)
✅ Dynamic performance indicators
✅ Interactive trend visualization
✅ Performance-based recommendations
✅ Semantic color system
