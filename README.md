# Kanchan Creation — Full-Stack E-commerce

Premium Indian ethnic fashion e-commerce for **Kanchan Creation**, an offline clothing store
based in Davangere, Karnataka, India.

---

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Client Browser                        │
└──────────────────────────┬──────────────────────────────────┘
                           │ HTTP / HTTPS
┌──────────────────────────▼──────────────────────────────────┐
│               Frontend — Next.js 14  :3000                   │
│   App Router · TypeScript · Tailwind CSS · Zustand           │
└──────────────────────────┬──────────────────────────────────┘
                           │ REST API (JSON)
┌──────────────────────────▼──────────────────────────────────┐
│               Backend — FastAPI  :8000                        │
│   Python 3.11 · SQLAlchemy · Pydantic · JWT Auth             │
└──────┬──────────────────┬────────────────────────┬──────────┘
       │                  │                        │
┌──────▼──────┐   ┌───────▼───────┐   ┌───────────▼──────────┐
│ PostgreSQL  │   │  Cloudinary   │   │      Razorpay         │
│   :5432     │   │  (images)     │   │    (payments)         │
└─────────────┘   └───────────────┘   └──────────────────────┘
```

---

## Prerequisites

- Node.js 20+
- Python 3.11+
- PostgreSQL 15+

---

## Quick Start

### Backend

```powershell
cd backend
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
Copy-Item .env.example .env
# Edit .env with your database credentials and secret key
alembic upgrade head
uvicorn app.main:app --reload --port 8000
```

API docs available at: http://localhost:8000/docs

### Frontend

```powershell
cd frontend
npm install
Copy-Item .env.local.example .env.local
# Edit .env.local with your API URL
npm run dev
```

Site available at: http://localhost:3000

---

## Environment Variables

### Backend (`backend/.env`)

| Variable | Description |
|---|---|
| `DATABASE_URL` | Async PostgreSQL URL (asyncpg driver) |
| `DATABASE_URL_SYNC` | Sync PostgreSQL URL (psycopg2, for Alembic) |
| `SECRET_KEY` | JWT signing secret — use a long random string |
| `ALGORITHM` | JWT algorithm (`HS256`) |
| `ACCESS_TOKEN_EXPIRE_MINUTES` | Access token TTL in minutes |
| `REFRESH_TOKEN_EXPIRE_DAYS` | Refresh token TTL in days |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret |
| `RAZORPAY_KEY_ID` | Razorpay key ID |
| `RAZORPAY_KEY_SECRET` | Razorpay key secret |
| `FRONTEND_URL` | Frontend origin for CORS |
| `ADMIN_EMAIL` | Initial admin account email |
| `ADMIN_PASSWORD` | Initial admin account password |

### Frontend (`frontend/.env.local`)

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_API_URL` | FastAPI backend URL |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | Razorpay publishable key |
| `NEXT_PUBLIC_SITE_NAME` | Displayed site name |

---

## Development Roadmap

| Stage | Description | Status |
|---|---|---|
| **Stage 1** | Project setup, folder structure, database models, API health check | ✅ Current |
| **Stage 2** | Authentication & User Management | Upcoming |
| **Stage 3** | Products, Categories & Shopping Experience | Upcoming |
| **Stage 4** | Cart, Wishlist & Checkout | Upcoming |
| **Stage 5** | Payments & Orders | Upcoming |
| **Stage 6** | Admin Dashboard & Production Deploy | Upcoming |

---

## Project Layout

```
kanchan_creatinon/
├── backend/          # FastAPI application
│   ├── app/
│   ├── alembic/
│   ├── tests/
│   └── requirements.txt
├── frontend/         # Next.js application
│   ├── src/
│   └── package.json
└── README.md
```
## latest update
 shopping experiencce improvement
