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
        <SingleCard v-for="(card, index) in store.cardsList" :name="card.name" :archetype="card.archetype"
            :image="card.card_images[0].image_url" :key="index" />
    </div>
</template>

<style scoped lang="scss"></style>