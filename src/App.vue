<script setup>
import { onMounted, ref } from 'vue';
import CharacterCard from './components/CharacterCard.vue';
import { getCharacterSet } from '@/api/rnmService.js';

const characters = ref([]);
let info = null;

onMounted(() => {
  getCharacters("https://rickandmortyapi.com/api/character/");
});

const getCharacters = async (api) => {
  const set = await getCharacterSet(api);
  for (const character of set.results) {
    characters.value.push(character);
  }
  info = set.info;
}
</script>

<template>
  <main>
    <h1>Rick and Morty Gallery</h1>
    <section class="gallery">
      <CharacterCard 
        v-for="character in characters"
        :character="character"
        ></CharacterCard>
    </section>
  </main>
</template>

<style scoped>
.gallery{

}
</style>
