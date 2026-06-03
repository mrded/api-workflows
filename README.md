# PROJECT_NAME

TypeScript API request workflow scaffolded from the `api-workflows` template.

## Install

```bash
bun install
```

## Run a request

```bash
bun requests/create-user.ts
```

Or with the shebang:

```bash
chmod +x requests/create-user.ts
./requests/create-user.ts
```

## Pipe responses

```bash
bun requests/create-user.ts | jq | nvim -
bun requests/create-user.ts | jq | less
bun requests/create-user.ts | fx
bun requests/create-user.ts > response.json
```

## Structure

```text
.
├── requests/        # one file per request
├── lib/
│   ├── api.ts       # fetch wrapper with gcloud auth
│   ├── auth.ts      # token helpers
│   └── fake.ts      # faker-based fixtures
├── package.json
└── tsconfig.json
```

## Auth

`lib/api.ts` uses `gcloud auth print-access-token`. Swap it for your auth scheme as needed.
