# Installation

> [!NOTE] TODO: Add zod-prisma-types documentation

## Requirements

- [NodeJS](https://nodejs.org/)
- [Docker](https://docs.docker.com/get-started/get-docker/)

## Step-by-step guide

- Clone this repository and install all dependencies:

```console
git clone https://github.com/GabRodPul/food-savers.git
cd food-savers
npm i
```

Copy .env.example to .env

> [!WARNING]
> By default, .env.example uses port 3306. You could either:
>
> - Ensure it's not being used by an existing MySQL installation (or other services).
> - Change the port.

> [!NOTE]
>
> - In Unix:
>
> ```console
> cp .env.example .env
> ```
>
> - In Windows:
>
> ```console
> copy .env.example .env
> ```

Start the database:

> [!TODO]: Implement an alternative way to check for port usage without netcat.

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
