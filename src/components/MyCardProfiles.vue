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
        <SingleCard />
    </div>
</template>

<style scoped lang="scss"></style>