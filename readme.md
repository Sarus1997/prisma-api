# Test Prisma

1. Clone project: 
    ```sh
   git clone https://github.com/Sarus1997/prisma-api.git
    ```

1. Installation: 
    ```sh
   npm install
    ```
#

This is a test project for [Prisma](https://www.prisma.io/), a powerful ORM for Node.js and TypeScript.

## Features

- **Auto-generated CRUD API**: Prisma automatically generates a CRUD API for your database, allowing you to focus on writing your application logic.
- **Strongly typed models**: Prisma's models are strongly typed, enabling you to catch errors at compile-time rather than runtime.
- **Realtime data access**: Prisma provides a powerful data access layer that allows you to access your data in real-time.

## Installation

Installation example to install and set up Prisma:

1. Initialize your project:
    ```sh
    npm init -y
    ```
2. Install the required dependencies:
    ```sh
    npm install prisma typescript ts-node @types/node --save-dev
    ```
3. Initialize TypeScript:
    ```sh
    npx tsc --init
    ```
4. Initialize Prisma:
    ```sh
    npx prisma init
    ```
5. Run the initial migration:
    ```sh
    npx prisma migrate dev --name init
    ```
6. Install the Prisma client:
    ```sh
    npm install @prisma/client
    ```
7. Run your main TypeScript file:
    ```sh
    npx ts-node ./index.ts
    ```
8. Open Prisma Studio:
    ```sh
    npx prisma studio
    ```
