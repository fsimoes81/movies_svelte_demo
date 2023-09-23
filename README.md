# SvelteKit | The Movie DB

This project was based on tutorial originally published on Youtube called [SvelteKit For Beginners | Movie App Tutorial](https://www.youtube.com/watch?v=ydR_M0fw9Xc&t=5s).

Since the tutorial was published SvelteKit has changed, then I updated the code for the tutorial.

In order to execute this project fallow the instruction below:

## Clone this repository 

```bash
    git clone https://github.com/fsimoes81/movies_svelte_demo.git
```

### Initialize the project

```bash
npm create init
```

### Add enviroment variables

Create a .env file and add the VITE_TMDB_TOKEN=Bearer <your token here>

You need to create a user account on https://www.themoviedb.org/ and generate an API Token.

### Developing

Once you've created a project and installed dependencies with `npm init` (or `pnpm init` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
