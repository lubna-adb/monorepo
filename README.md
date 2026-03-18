# Monorepo

Monorepo setup menggunakan Bun Workspaces dengan:
- **Frontend**: Bun + Vite + React (TypeScript) + Tailwind v4 + ShadCN
- **Backend**: Bun + Elysia + Prisma + SQLite
- **Shared**: Package types bersama (ApiResponse, HealthCheck, User)

## Struktur
```
monorepo/
├── apps/
│   ├── frontend/   → React + Vite (port 5173)
│   └── backend/    → Elysia API (port 3000)
├── packages/
│   └── shared/     → Shared TypeScript types
├── package.json
└── tsconfig.json
```

## Cara Menjalankan

Install semua dependencies dari root:
```
bun install
```

Jalankan frontend & backend sekaligus:
```
bun dev
```

Atau masing-masing:
```
bun dev:frontend   # http://localhost:5173
bun dev:backend    # http://localhost:3000
                   # http://localhost:3000/swagger
```
