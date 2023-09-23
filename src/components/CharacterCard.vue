<script setup>
const props = defineProps({
    character: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="card">
        <div class="card__thumbnail">
            {{ character.image }}
        </div>
        <div class="card__content">
            <h2 class="card__name">{{ character.name }}</h2>
            <small class="card__creation-time">{{ character.created }}</small>
            <p class="card__status">Status: {{ character.status }}</p>
            <p class="card__location">Location: {{ character.location.name }}</p>
        </div>
    </div>
</template>

<style scoped>
</style>