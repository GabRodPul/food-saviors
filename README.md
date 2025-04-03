# food-savers

CodeVoyagers 3 - Group 9: Food Savers

## Requirements

- [NodeJS](https://nodejs.org/)
- [Docker](https://docs.docker.com/get-started/get-docker/)

## Quick setup
- Clone this repository and install all dependencies:
```console
git clone https://github.com/GabRodPul/food-savers.git
cd food-savers
npm i
```

Copy .env.example to .env
> [!WARNING]
> By default, .env.example uses port 3306. You could either:
> - Ensure it's not being used by an existing MySQL installation (or other services).
> - Change the port.

> [!NOTE]
> - In Unix:
> ```console
> cp .env.example .env
> ```
>
> - In Windows:
> ```console
> copy .env.example .env
> ```
Start the database:
> [!NOTE]
> TODO: Implement an alternative way to check for port usage without netcat.
- Setup the database in a Docker container:
```console
'./start-database.sh'
```

- If you don't have netcat (in Windows, for example) you'll be prompted to confirm.
  You can have the script generate you a random password for your database and
  it'll replace `password` in the `DATABASE_URL` variable with it.

- Push the database:
```console
npm run db:push
```

- Run the app, see if it works:
```console
npm run dev
```

## Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
