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
    <div class="ms_primary_bg">
        <div class="container ms_search_container">
            <h5 class="m-2">Filtra per archetipo:</h5>
            <select class="ms_archetypes m-2" @change="$emit('ChangeValue')">
                <option v-for="(card, index) in store.archetypeList" :key="index" :value="card.archetype_name">
                    {{ card.archetype_name }}
                </option>
            </select>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;

.ms_primary_bg {
    background-color: $color-primary;
}

.ms_search_container {
    background-color: $color-secondary;
}

.ms_archetypes {

    padding: 5px 10px;

}
</style>