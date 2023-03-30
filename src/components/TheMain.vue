<script>
import MyCardProfiles from './MyCardProfiles.vue';
import SearchResult from './SearchResult.vue';

export default {
    components: {
        MyCardProfiles,
        SearchResult
    },
    name: "TheMain",
    data() {
        return {}
    }
}
</script>

<template>
    <main>
        <SearchResult />
        <MyCardProfiles />
    </main>
</template>

<style scoped lang="scss">
@use "../styles/partials/variables" as *;

main {
    background-color: $color-primary;
}
</style>