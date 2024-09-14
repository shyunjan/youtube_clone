<div style="display:flex; max-width:100%; justify-content:center;">
  <a href="https://svelte.dev/" target="blank"><img src="https://svelte.dev/favicon.png" alt="Svelte Logo"/></a>
</div>

# Description

## Clone YouTube

cloning project against YouTube([https://www.youtube.com/](https://www.youtube.com/))

## Use

- Svelte
- SvelteKit
- TailwindCSS
- TailwindCSS/Typography

# Project setup history

## create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

### Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

### Install TailwindCSS

```bash
npx svelte-add@latest tailwindcss
```

## Setup Typescript

```bash
$ npm i -g @types/node # 가급적이면 global 모드로 @types/node 설치
$ npm link -D @types/node # global @types/node package 연결
```

# Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

# Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
