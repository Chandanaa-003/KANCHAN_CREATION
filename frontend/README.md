# Kanchan Creation — Next.js Frontend

## Prerequisites

- Node.js 20+

---

## Setup (Windows PowerShell)

### 1. Install dependencies

```powershell
npm install
```

### 2. Create the environment file

```powershell
Copy-Item .env.local.example .env.local
```

### 3. Edit `.env.local`

Open `.env.local` and fill in:
- `NEXT_PUBLIC_API_URL` — URL of your FastAPI backend (default: `http://localhost:8000`)
- `NEXT_PUBLIC_RAZORPAY_KEY_ID` — your Razorpay test key (leave as placeholder for now)

### 4. Start the FastAPI backend

Ensure the backend is running at `http://localhost:8000` before starting the frontend.
See `../backend/README.md` for setup instructions.

### 5. Start the development server

```powershell
npm run dev
```

Then visit: http://localhost:3000

### 6. Production build

```powershell
npm run build
npm run start
```

### 7. Lint

```powershell
npm run lint
```

---

## Project Structure

```
frontend/
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── (info)/         # Informational pages (about, contact, policies)
│   │   ├── account/        # Customer account pages
│   │   ├── admin/          # Admin dashboard pages
│   │   ├── cart/           # Shopping cart
│   │   ├── checkout/       # Checkout flow
│   │   ├── product/        # Product detail pages
│   │   ├── shop/           # Shop / product listing
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/
│   │   ├── home/           # Home page sections
│   │   ├── layout/         # Header, Footer, AnnouncementBar
│   │   └── ui/             # Reusable UI components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # API client, utils, constants
│   ├── store/              # Zustand state stores
│   └── types/              # TypeScript interfaces
├── .env.local.example      # Environment variable template
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── package.json            # Dependencies
```

---

## Environment Variables

| Variable | Description | Default |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | FastAPI backend URL | `http://localhost:8000` |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | Razorpay publishable key | — |
| `NEXT_PUBLIC_SITE_NAME` | Site name displayed in UI | `Kanchan Creation` |
