<script>
export default {
    name: "TheHeader",
    data() {
        return {

        }
    },
    props: {
        title: String
    }
}
</script>

<template>
    <header>
        <h1>{{ title }}</h1>
    </header>
</template>

<style scoped lang="scss">
header {

    & h1 {
        margin: 20px;
    }
}
</style>