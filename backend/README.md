# Kanchan Creation — FastAPI Backend

## Prerequisites

- Python 3.11+
- PostgreSQL 15+

---

## Setup (Windows PowerShell)

### 1. Create a virtual environment

```powershell
python -m venv venv
```

### 2. Activate the virtual environment

```powershell
.\venv\Scripts\Activate.ps1
```

> If you get an execution policy error, run:
> `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`

### 3. Install dependencies

```powershell
pip install -r requirements.txt
```

### 4. Create the environment file

```powershell
Copy-Item .env.example .env
```

### 5. Edit `.env`

Open `.env` in any text editor and fill in:
- `DATABASE_URL` — your async PostgreSQL connection string
- `DATABASE_URL_SYNC` — your sync PostgreSQL connection string (used by Alembic)
- `SECRET_KEY` — a long random string (use `python -c "import secrets; print(secrets.token_hex(32))"`)
- Cloudinary and Razorpay credentials (leave blank for development)

### 6. Create the PostgreSQL database

Using the `psql` CLI:

```powershell
createdb kanchan_creation
```

Or create it via pgAdmin: right-click Databases → Create → Database → name it `kanchan_creation`.

### 7. Run database migrations

```powershell
alembic upgrade head
```

### 8. Start the development server

```powershell
uvicorn app.main:app --reload --port 8000
```

### 9. View interactive API documentation

Open your browser at: http://localhost:8000/docs

### 10. Run tests

```powershell
pytest tests/ -v
```

---

## Project Structure

```
backend/
├── app/
│   ├── api/v1/          # Route handlers
│   ├── core/            # Config, security, dependencies
│   ├── db/              # Database engine, session, base
│   ├── models/          # SQLAlchemy ORM models
│   ├── repositories/    # Data access layer
│   ├── schemas/         # Pydantic request/response models
│   ├── services/        # Business logic
│   ├── utils/           # Logging and helpers
│   └── main.py          # FastAPI application entry point
├── alembic/             # Database migration scripts
├── tests/               # Pytest test suite
├── .env.example         # Environment variable template
├── alembic.ini          # Alembic configuration
└── requirements.txt     # Python dependencies
```

---

## Deployment

For production:

1. Set `APP_ENV=production` in your environment.
2. Use a strong random `SECRET_KEY`.
3. Set `FRONTEND_URL` to your actual frontend domain.
4. Use a managed PostgreSQL service (e.g., Supabase, Railway, AWS RDS).
5. Deploy with a production ASGI server:

```powershell
uvicorn app.main:app --host 0.0.0.0 --port 8000 --workers 4
```

Or use Gunicorn with uvicorn workers:

```bash
gunicorn app.main:app -w 4 -k uvicorn.workers.UvicornWorker --bind 0.0.0.0:8000
```
