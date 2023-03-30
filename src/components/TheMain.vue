<script>
import MySearchBar from './MySearchBar.vue';
import MyCardProfiles from './MyCardProfiles.vue';

export default {
    components: {
        MySearchBar,
        MyCardProfiles,
    },
    name: "TheMain",
    data() {
        return {}
    }
}
</script>

<template>
    <main>
        i
        <MySearchBar />
        <MyCardProfiles />
    </main>
</template>

<style scoped lang="scss">
@use "../styles/partials/variables" as *;

main {
    background-color: $color-primary;
}
</style>