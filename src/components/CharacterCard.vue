<script setup>
import { computed } from 'vue';
const props = defineProps({
    character: {
        type: Object,
        required: true
    }
});
const status = computed(() => {
    return props.character.status.toLowerCase();
});
</script>

<template>
    <div class="card">
        <img class="card__thumbnail" :src="character.image" :alt="character.name">
        <div class="card__content">
            <h2 class="card__name">{{ character.name }}</h2>
            <small class="card__creation-time">{{ character.created }}</small>
            <p class="card__status">Status: <span :class="status">{{ character.status }}</span></p>
            <p class="card__location">Location: {{ character.location.name }}</p>
        </div>
    </div>
</template>

<style scoped>
.card{
    background-color: var(--clr-card-bg);
    border-radius: 20px;
    overflow: hidden;
    padding: 2.4rem;
    display: flex;
    flex-direction: column;
}
.card__thumbnail{
    border-radius: 15px 15px 25px 0;
    max-width: 100%;
    height: 250px;
    object-fit: cover;
    object-position: 50%;
    margin-bottom: 2.4rem;
}
.card__name{
    margin-bottom: 0.2rem;
}
.card__creation-time{
    color: var(--clr-text-accent);
    margin-bottom: 2rem;
}
.card__status{
    margin-bottom: 0.8rem;
}
.alive{
    color: var(--clr-status-alive);
}
.dead{
    color: var(--clr-status-dead);
}
.unknown{
    color: var(--clr-text-light);
}
.card__status span{
    font-weight: var(--fw-semibold);
}
</style>