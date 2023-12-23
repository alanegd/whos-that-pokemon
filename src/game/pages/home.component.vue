<script>
import {pokemonApiService} from "@/game/services/pokemon-api.service.js";

export default {
  name: "home",
  data() {
    return {
      pokemonApi: null,
      pokemon: null,
      pokemon_name: "",
      streak: 0,
      best: 0,
      loading: true,
    };
  },

  created() {
    this.pokemonApi = new pokemonApiService();
    this.pokemonApi.getPokemonByRandomIdRange(151).then((response) => {
      this.pokemon = response.data;
      this.loading = false;
    });
  },

  methods: {
    async handleSubmit() {
      // Verify that the submitted Pokémon name equals the displayed Pokémon name.
      if (this.pokemon_name.toLowerCase() === this.pokemon.name.toLowerCase()) {
        alert("Correct!");
        this.streak++;
      } else {
        alert("Wrong! The Pokémon was " + this.pokemon.name + ".");
        this.streak = 0;
      }
      if (this.best < this.streak) {
        this.best = this.streak;
      }
      this.pokemonApi.getPokemonByRandomIdRange(151).then((response) => {
        this.pokemon = response.data;
      });
      this.pokemon_name = "";
    }
  }
}
</script>

<template>
  <div class="flex justify-center items-center h-screen mx-auto">
    <pv-card class="px-10 mx-10" v-if="!loading">
      <template #header>
        <div class="flex flex-col justify-center text-center mt-4">
          <h1 class="text-2xl font-bold">Who's that Pokémon?</h1>
          <div class="flex justify-center gap-3">
            <p>Streak: {{streak}}</p>
            <p>Best streak: {{best}}</p>
          </div>
        </div>
      </template>
      <template #content>
        <div class="flex flex-col justify-center align-center text-center">
          <img class="darken" :src="pokemon.sprites.other['official-artwork'].front_default" alt="pokemon">

          <form id="guess_pokemon_name" @submit.prevent="handleSubmit">
            <pv-input-text
                id="pokemon_name"
                class="w-full mb-4 px-3 py-2 border border-gray-600 rounded-md"
                v-model="pokemon_name"
                autocomplete="off"
                required>
            </pv-input-text>
            <pv-button class="py-3 px-7 font-semibold text-white bg-[#ec5f4d] hover:bg-[#ff7c67] rounded-full"
                       type="submit">
              Submit
            </pv-button>
          </form>
        </div>
      </template>
    </pv-card>
    <div v-else>
      Loading
    </div>
  </div>
</template>

<style scoped>
.darken {
  user-select: none;
  filter: brightness(0%);
  pointer-events: none;
}
</style>