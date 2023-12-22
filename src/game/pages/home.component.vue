<script>
import {pokemonApiService} from "@/game/services/pokemon-api.service.js";

export default {
  name: "home",
  data() {
    return {
      pokemonApi: null,
      pokemon: "",
      pokemon_name: ""
    }
  },
  created() {
    this.pokemonApi = new pokemonApiService();
    /*
    this.pokemonApi.getPokemonById(Math.floor((Math.random() * 151) + 1)).then((response) => {
      this.pokemon = response.data;
    });

  },
  methods: {
    async handleSubmit() {
      // Verify that the submitted Pokémon name equals the displayed Pokémon name. If it's correct, the displayed Pokémon changes to a new one.
      if (this.pokemon_name.toLowerCase() === this.pokemon.name.toLowerCase()) {
        alert("Correct!");
        this.pokemonApi.getPokemonById(Math.floor((Math.random() * 151) + 1)).then((response) => {
          this.pokemon = response.data;
        });
      } else {
        alert("Wrong!");
      }
    }

     */
  }
}
</script>

<template>
  <div class="flex justify-center align-center">
    <pv-card class="px-10">
      <template #content>
        <div class="flex flex-col justify-center align-center text-center">
          <h1 class="mb-3 font-bold">Who's that Pokémon?</h1>
          <!--<img class="w-full my-5" :src="pokemon.sprites.front_default" :alt="pokemon.name">-->

          <form id="guess_pokemon_name" @submit.prevent="handleSubmit">
            <pv-input-text
                id="pokemon_name"
                class="w-full mb-4 px-3 py-2 border rounded-md"
                v-model="pokemon_name">
            </pv-input-text>
            <pv-button class="py-3 px-7 font-semibold text-white bg-[#ec5f4d] hover:bg-[#ff7c67] rounded-full"
                       type="submit">
              Submit
            </pv-button>
          </form>
        </div>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>
img {
  user-select: none;
  filter: brightness(0%);
  pointer-events: none;
}
</style>