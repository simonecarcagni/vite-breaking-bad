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
    <header class="d-flex">
        <img src="https://images-ext-1.discordapp.net/external/t-i60ZFvLG5fKnZrcHgaVbou_08NURni1ft_5G49qik/%3Fcb%3D20130310042737%26path-prefix%3Des/http/vignette1.wikia.nocookie.net/yugiohenespanol/images/a/aa/Yugioh_anime_logo.jpg/revision/latest?width=1440&height=508"
            alt="YuGiOh Logo">
        <h1>{{ title }}</h1>
    </header>
</template>

<style scoped lang="scss">
header {

    & img {
        height: 50px;
        width: 150px;
        margin: 10px;
    }

    & h1 {
        margin: 10px;
    }
}
</style>