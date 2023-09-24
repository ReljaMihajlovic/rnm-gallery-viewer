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
const creationTime = computed(() => {
    const date = new Date(props.character.created);
    
    // UTC time
    // const dayUTC = date.getUTCDate();
    // const monthUTC = date.getUTCMonth() + 1;
    // const yearUTC = date.getUTCFullYear();
    // const secondsUTC = date.getUTCSeconds();
    // const minutesUTC = date.getUTCMinutes();
    // const hoursUTC = date.getUTCHours();
    // const timeUTC = hoursUTC + ":" + minutesUTC + ":" + secondsUTC;
    // return dayUTC + "." + monthUTC + "." + yearUTC + " " + timeUTC;

    // Local time zone
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const time = hours + ":" + minutes + ":" + seconds; 
    return day + "." + month + "." + year + " " + time;
});
</script>

<template>
    <div class="card">
        <img class="card__thumbnail" :src="character.image" :alt="character.name">
        <div class="card__content">
            <h2 class="card__name">{{ character.name }}</h2>
            <small class="card__creation-time">{{ creationTime }}</small>
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