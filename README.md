# Config Node Tsc [![npm version](https://badge.fury.io/js/config-node-tsc.svg)](https://www.npmjs.com/package/config-node-tsc) [![Downloads](https://img.shields.io/npm/dm/config-node-tsc.svg)](https://www.npmjs.com/package/config-node-tsc) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white) ![NodeJS](https://img.shields.io/badge/Node.js-339933?logo=Node.js&logoColor=white)

A simple tool that creates totally empty nodejs app configured with typescript with just one command.

If you dont want to read readme. Just execute the below

```bash
npx config-node-tsc
```

# Usage

> [!NOTE]
> I would recommend you to run any one of the commands below in your empty project folder since it initializes clean empty nodejs project configured with typescript.

> It will initialize package.json file with default values or update your existing package.json.

> It will initialize tsconfig.json file with required fields and remove all the comments. Your code will be transpiled inside `./dist` folder after building

## 1. Create empty nodejs app with typescript configured

```bash
npx config-node-tsc
```

This will create clean empty nodejs app configured with typescript. It will install [typescript](https://www.npmjs.com/package/typescript) and [@types/node](https://www.npmjs.com/package/@types/node) as dev dependencies

Your package.json will look like this -

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "build": "npx tsc",
    "prestart": "npm run build",
    "start": "node dist/server.js",
    "watch": "tsc -w",
    "dev": "node --watch dist/server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "@types/node": "^22.5.4",
    "typescript": "^5.6.2"
  }
}
```

tsconfig.json file will look like this -

```json
{
  "compilerOptions": {
    "target": "es2020",
    "module": "nodenext",
    "moduleResolution": "nodenext",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

Your folder structure will look like this -

<p align='left'>
<img src='https://github.com/user-attachments/assets/71a9cebe-ea44-457a-bb89-dde4a2e9de1a' width='300' alt='Folder Structure'>
</p>

## 2. Create empty nodejs typescript app with express

```bash
npx config-node-tsc --express
```

This will create clean empty nodejs app configured with typescript and express. It will install [typescript](https://www.npmjs.com/package/typescript), [@types/node](https://www.npmjs.com/package/@types/node), [@types/express](https://www.npmjs.com/package/@types/express) as dev dependencies, and [Express](https://www.npmjs.com/package/express) as dependencies

Your package.json file will look like this -

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "build": "npx tsc",
    "prestart": "npm run build",
    "start": "node dist/server.js",
    "watch": "tsc -w",
    "dev": "node --watch dist/server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "express": "^4.19.2"
  },
  "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/node": "^22.5.4",
    "typescript": "^5.6.2"
  }
}
```

# Building And Running The Code

To build and transpile your Typescript code to Javascript, use `npm run build`.

It will transpile all the code inside `./dist` folder.

Use `npm run watch` to keep watching for Typescript changes and transpile it.

Use `npm run dev` on a seperate terminal to keep watching for actual javascript code inside `dist` folder
