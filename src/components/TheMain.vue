<script>
import MyCardProfiles from './MyCardProfiles.vue';

export default {
    components: {
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
        <MyCardProfiles />
    </main>
</template>

<style scoped lang="scss">
@use "../styles/partials/variables" as *;

main {
    background-color: $color-primary;
}
</style>