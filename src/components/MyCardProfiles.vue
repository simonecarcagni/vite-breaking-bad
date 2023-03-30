<script>
import SingleCard from './SingleCard.vue';
import { store } from '../store.js'

export default {
    name: "MyCardProfiles",
    components: {
        SingleCard,
    },
    data() {
        return {
            store
        }
    }

}
</script>

<template>
    <div class="container d-flex ms_cardcontainer flex-wrap">
        <SingleCard v-for="(card, index) in store.cardsList" :image="card.card_images[0].image_url" :name="card.name"
            :archetype="card.archetype" :race="card.race" :key="index" />
    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;

.ms_cardcontainer {
    background-color: $color-secondary;
}
</style>