<p align="center">
  <a>
    <img alt="Who's that Pokémon?" src="public/favicon.ico" width="60" />
  </a>
</p>

<h1 align="center">
  Who's that Pokémon?
</h1>


## Technologies used

- [Vue 3](https://v3.vuejs.org/): JavaScript framework for building user interfaces and single-page applications.
- [Vite](https://vitejs.dev/): Build tool that aims to provide a faster and leaner development experience for modern web projects.
- [Tailwind CSS](https://tailwindcss.com/): CSS framework.
- [PokéAPI](https://pokeapi.co/): The RESTful Pokémon API.

## Getting started

1. Open the command prompt and clone the repository:
```sh
git clone https://github.com/alanegd/whos-that-pokemon.git
```

2. Navigate to the project directory.

3. Run the following command to install the necesarry dependencies listed in the package.json file:
```sh
npm install
```

4. Run the Development Server with:
```sh
npm run dev
```

5. Open your web browser and go to `http://localhost:8000/ ` to view the app.

## Project structure

    ```
    .
    ├─  shared
    │   └── services
    │       # Sets up an Axios instance with a base URL ('https://pokeapi.co/api/v2/')
    └── src
        ├── game
        │   ├── components
        │   │   # Components that define the overall structure of the game interface
        │   ├── pages
        │   │   # Contains the Vue components that correspond to different pages
        │   └── services
        │       # Contains the services logic for the game
        ├─  router
        │   # Contains the routes for the different pages
        └── shared
            └── components
                # Contains the components that are shared across the app


## Contact
* GitHub: [https://github.com/alanegd](https://github.com/alanegd)
* LinkedIn: [https://www.linkedin.com/in/alan-galavis/](https://www.linkedin.com/in/alan-galavis/)