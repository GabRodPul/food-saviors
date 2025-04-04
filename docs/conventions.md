# Conventions

This document specifies the different naming and structural conventions
we should follow in our project to ensure consistance.

## Project sections

Our project can be divided into 4 sections:

- DESIGN
- BACKEND
- FRONTEND
- DOCUMENTATION (feel free to shorten to DOCS if you want)

## Branching model

### Issues

Issues must be named like this:

```console
<SECTION> - <Issue title>
```

Where:

- `SECTION` refers to the [section's](#project-sections) name, in `UPPERCASE`.
- `Issue title` is the title of the issue. It should be a short phrase.

Add descriptions when the title may require more context.

### Branch names

We must follow a branching model like the next one:

```console
main
└── develop
    └── [...feature/<section>/IBC-<code>_<short-description>]
```

Where:

- `section` refers to the [section's](#project-sections) name, in `lowercase`.
- `code` refers to the `numeric` code of the [issue](#issues).
- `short-description` is a short description of the [issue](#issues), in `lower-kebab-case`.

## Project structure

### Base structure

By going to either the [Pages](https://create.t3.gg/en/folder-structure-pages?packages=prisma%2Ctailwind%2Ctrpc)
or [App](https://create.t3.gg/en/folder-structure-app?packages=prisma%2Ctailwind%2Ctrpc)
project structure, you can see what T3 initially generated for us...

- [ ] NextAuth.js
- [x] Prisma
- [ ] Drizzle
- [x] Tailwind CSS
- [x] tRPC

```
.
├─ prisma
│  └─ schema.prisma
├─ public
│  └─ favicon.ico
├─ src
│  ├─ app
│  │  ├─ _components
│  │  │  └─ post.tsx
│  │  ├─ api
│  │  │  └─ trpc
│  │  │     └─ [trpc]
│  │  │        └─ route.ts
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ server
│  │  ├─ db.ts
│  │  └─ api
│  │     ├─ routers
│  │     │  └─ example.ts
│  │     ├─ trpc.ts
│  │     └─ root.ts
│  ├─ styles
│  │  └─ globals.css
│  ├─ env.js
│  └─ trpc
│     ├─ query-client.ts
│     ├─ react.tsx
│     └─ server.ts
├─ .env
├─ .env.example
├─ .eslintrc.cjs
├─ .gitignore
├─ next-env.d.ts
├─ next.config.js
├─ package.json
├─ postcss.config.js
├─ prettier.config.js
├─ README.md
├─ tailwind.config.ts
└─ tsconfig.json
```

### Current structure

- Documentation: `docs/.*.md`

  - Images for `docs/img/*`

- Prisma: `prisma/`
  - !GITIGNORED - Generated zod schemas: `prisma/_generated/*`

## Coding

### Prisma

- Model definitions in `schema.prisma` must be `PascalCase`.
- Relations for each model must go after the model's own fields. I.e:

```prisma
model Review {
  id   Int      @id @default(autoincrement())
  date DateTime
  text String

  /// Relations
  user   User @relation(fields: [userId], references: [id])
  userId Int

  business   Business @relation(fields: [businessId], references: [id])
  businessId Int
}
```

### TypeScript

#### Common

- Variable, object and function names must be `camelCase`.
- Type, class and funcional component names must be `PascalCase`.
- Enviroment variables must be `UPPER_SNAKE_CASE`.
- Use declarations for exports.

```ts
// Exporting declarations
export let name1, name2 /*, … */; // also var
export const name1 = 1,
  name2 = 2; /*, … */ // also var, let
export function functionName() {
  /* … */
}
export class ClassName {
  /* … */
}
export function generatorFunctionName() {
  /* … */
}
export const { name1, name2: bar } = o;
export const [name1, name2] = array;
```

#### API routers

- API routers must be placed inside `@food-saviors/server/api/routers/`.

  - Filename: `{model}.ts`.
  - Export: `{model}Router.ts`.

- API routers will be imported in `@food-saviors/server/api/root.ts` as members of `appRouter`.
  - Member name: `appRouter.{model}`
