<script>
import { store } from '../store';
export default {
    name: "MySearchBar",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container ms_search_container">
        <select class="ms_archetypes m-2">
            <option v-for="(card, index) in store.cardsList" :key="index" :value="card.archetype">
                {{ card.archetype }}
            </option>
        </select>
    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;

.ms_search_container {
    background-color: $color-secondary;
}

.ms_archetypes {

    padding: 5px 10px;

}
</style>