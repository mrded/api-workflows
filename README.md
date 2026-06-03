# api-workflows

A lightweight TypeScript scaffold for writing API workflows as ordinary code, not as DSL or templates.

```bash
bun create mrded/api-workflows my-workflows
```

## Motivation

Tools like Postman, Insomnia, Bruno, Hurl, and JetBrains HTTP Client are great for sending requests.

But real-world API workflows quickly become more than just requests:

- Generate a UUID
- Create fake test data
- Get an authentication token from a CLI tool
- Create a company
- Capture its ID
- Create a user in that company
- Verify the result
- Print the response
- Save data for later steps

Most HTTP clients solve this by introducing their own scripting language, templating syntax, variables, hooks, or plugins. Eventually you find yourself writing code inside a tool that is trying to avoid being code.

## The idea

Instead of inventing another DSL, write API workflows in TypeScript.

```ts
const company = await api.post("/companies", {
  name: faker.company.name()
});

const user = await api.post("/users", {
  companyId: company.id,
  email: faker.internet.email()
});
```

Need a UUID?

```ts
crypto.randomUUID();
```

Need a token?

```ts
await $`gcloud auth print-access-token`.text();
```

Need fake data?

```ts
faker.internet.email();
```

Need loops, conditionals, retries, assertions, helper functions, or reusable fixtures? You already have them.

## Why not just write scripts?

You can. `api-workflows` provides a lightweight structure around that idea:

- Discoverable workflows
- Consistent CLI
- Pretty request/response output
- Shared authentication helpers
- Reusable fixtures
- Editor integration
- Workflow organisation

while keeping everything as ordinary TypeScript files.

## Philosophy

> If your API workflow requires programming, use a programming language.

No custom request format. No embedded scripting language. No template engine. Just TypeScript.

## Getting started

```bash
bun create mrded/api-workflows my-workflows
cd my-workflows
bun requests/create-user.ts
```

See [`README.template.md`](./README.template.md) for the README that ships with scaffolded projects.
