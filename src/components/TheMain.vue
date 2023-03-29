<script>
import MySearchBar from './MySearchBar.vue';
import MySearchBar from './MySearchBar.vue';

export default {
    components: {
        MySearchBar,
        MySearchBar
    },
    name: "TheMain",
    data() {
        return {}
    }
}
</script>

<template>
    <main>
        <MySearchBar />
    </main>
</template>

<style scoped lang="scss">
@use "../styles/partials/variables" as *;

main {
    height: 800px;
    background-color: $color-primary;
}
</style>