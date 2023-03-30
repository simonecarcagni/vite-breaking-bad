<script>
import { store } from '../store';
export default {
    name: "SearchResult",
    data() {
        return {
            store
        }
    },
    computed: {
        numberCards() {
            return `Found ${this.store.cardsList.length} cards`
        }
    }
}
</script>

<template>
    <div class="container p-4 ms_search_result">
        <h6>{{ numberCards }}</h6>
    </div>
</template>

<style scoped lang="scss">
.ms_search_result {
    color: white;
    background-color: #212529;
}
</style>