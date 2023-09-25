<script setup>
import { onMounted, ref } from 'vue';
import CharacterCard from './components/CharacterCard.vue';
import { getCharacterSet } from '@/api/rnmService.js';

const characters = ref([]);
let info = null;
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

const infiniteScrollCallback = async (entries, observer) => {
  const lastCard = entries[0];
  if(!lastCard.isIntersecting) return;
  // Last card is showing in the viewport
  if (!info.next) return;
  await getCharacters(info.next);
  observer.unobserve(lastCard.target);
  const newLastCard = document.querySelector(".card:last-child");
  observer.observe(newLastCard);
}

const observer = new IntersectionObserver(infiniteScrollCallback, options);

onMounted(async () => {
  await getCharacters("https://rickandmortyapi.com/api/character/");
  const lastCard = document.querySelector(".card:last-child");
  observer.observe(lastCard);
});

const getCharacters = async (url) => {
  const set = await getCharacterSet(url);
  characters.value.push(...set.results);
  info = set.info;
}
</script>

<template>
  <main class="container">
    <h1 class="title">Rick and Morty Gallery</h1>
    <section class="gallery">
      <CharacterCard 
        v-for="character in characters"
        :key="character.id"
        :character="character"
      ></CharacterCard>
    </section>
  </main>
</template>

<style scoped>
.title{
  text-align: center;
  margin-block: 5.6rem;
}
.gallery{
  margin-bottom: 20rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(308px, 1fr));
  grid-template-rows: auto;
  gap: 2.4rem;
}
</style>
