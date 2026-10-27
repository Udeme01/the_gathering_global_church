# The Gathering Global Church: Church Management Platform

> A modern church website and role-based management platform: a public site for visitors, and dashboards where church authorities and unit leaders manage members, units, events, and giving.

![Status](https://img.shields.io/badge/status-in%20development-yellow)
![Next.js](https://img.shields.io/badge/Next.js-App%20Router-black)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue)
![License](https://img.shields.io/badge/license-MIT-green)

**Live demo:** _coming soon_

<!-- Banner screenshot or short GIF of the home page here once the UI is ready -->
<!-- ![Home page](docs/screenshots/home.png) -->

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Roles and Permissions](#roles-and-permissions)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Roadmap](#roadmap)
- [What I'm Learning](#what-im-learning)
- [Author](#author)

---

## Overview

**The problem:** Church leaders often manage members, units, events, and giving across spreadsheets, WhatsApp groups, and paper registers. It is hard to keep track of who belongs where, who attended, and who can see what.

**The solution:** One platform where:

- **Visitors** can explore the church, events, and sermons, and give online.
- **Members** have their own accounts and profiles.
- **Unit leaders** manage only their own unit's members and attendance.
- **Church authorities** oversee the whole church from an admin dashboard.

> This project is being built in public as a full-stack portfolio project to practise production-grade engineering: role-based access control, secure authentication, payments, testing, and CI/CD.

## Features

Legend: ✅ done · 🚧 in progress · 📋 planned

### Public site

- 🚧 Home, About, Leadership, Units
- 📋 Events with registration
- 📋 Sermons (video/audio) and blog
- 📋 Online giving (Paystack)
- 📋 Contact and prayer requests
- 📋 SEO: metadata, sitemap, structured data

### Authentication

- 📋 Register, login, logout
- 📋 Access and refresh tokens (JWT)
- 📋 Password reset by email

### Dashboards

- 📋 Role-based sidebar and routes
- 📋 Member management (search, filter, pagination)
- 📋 Unit management and attendance tracking
- 📋 Event management
- 📋 Giving records and reports (restricted roles)
- 📋 Audit log of important actions

## Tech Stack

| Layer      | Technology                                                               |
| ---------- | ------------------------------------------------------------------------ |
| Frontend   | Next.js (App Router), React, TypeScript, Tailwind CSS, shadcn/ui, Motion |
| Backend    | Node.js, Express, TypeScript                                             |
| Database   | PostgreSQL, Prisma                                                       |
| Auth       | JWT (access and refresh tokens), argon2/bcrypt                           |
| Validation | Zod                                                                      |
| Payments   | Paystack                                                                 |
| Testing    | Vitest/Jest, Supertest                                                   |
| API Docs   | Swagger / OpenAPI                                                        |
| DevOps     | Docker, GitHub Actions, Vercel, Render/Railway                           |

_The frontend is built first against mock data; backend pieces are added step by step._

## Architecture

```
Browser ──> Next.js (frontend) ──> Express API ──> PostgreSQL
                                       │
                                       └──> Paystack (payments, webhooks)
```

_A proper diagram (draw.io, Excalidraw, or Mermaid) will replace this when the backend is built._

## Roles and Permissions

| Role                 | Can do                                                 |
| -------------------- | ------------------------------------------------------ |
| Super Admin          | Everything, including roles and settings               |
| Church Authority     | Manage members, units, events, content                 |
| Finance (restricted) | View and export giving records                         |
| Unit Leader          | Manage only their own unit's members and attendance    |
| Member               | Manage own profile, view own units, events, and giving |

## Getting Started

### Prerequisites

- Node.js 20+ (LTS)
- npm
- Git

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Udeme01/the_gathering_global_church.git
cd the_gathering_global_church

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values. **Never commit real secrets.**

| Variable               | Description                                             |
| ---------------------- | ------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Public URL of the site                                  |
| `DATABASE_URL`         | PostgreSQL connection string _(added with the backend)_ |
| `JWT_SECRET`           | Secret for signing tokens _(added with the backend)_    |
| `PAYSTACK_SECRET_KEY`  | Paystack secret key _(added with payments)_             |

## Project Structure - this project structure may change with time or as i proceed building the ui(frontend).

```
src/
  app/
    (public)/      # Home, about, events, sermons, give
    (auth)/        # Login, register
    dashboard/     # Member area
    admin/         # Admin and unit leader panel
  components/
    ui/            # shadcn/ui components
    layout/        # Navbar, footer, sidebar
  lib/             # Helpers and utilities
  data/            # Mock data (temporary)
```

## Scripts

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Create a production build    |
| `npm run start` | Run the production build     |
| `npm run lint`  | Run ESLint                   |

## Roadmap

- [ ] Design system and Figma wireframes
- [ ] Public pages with mock data
- [ ] Admin and unit leader dashboard layouts
- [ ] Node.js API with authentication and RBAC
- [ ] PostgreSQL schema and Prisma migrations
- [ ] Paystack giving with webhook verification
- [ ] Automated tests and CI/CD
- [ ] Accessibility audit and performance tuning (Lighthouse)
- [ ] Deployment and demo video

## What I'm Learning

This project is how I'm learning Node.js, TypeScript, and relational database design properly. I document decisions and trade-offs as I go (see `/docs`).

## Author

**Emmanuel Udeme**: Frontend / Full-Stack Developer, Lagos, Nigeria
[GitHub](https://github.com/Udeme01) · [LinkedIn](https://linkedin.com/in/emmanuel-udeme)

## License

MIT, see the [LICENSE](LICENSE) file.
