<script>
export default {
    name: "SingleCard",
    data() {
        return {
        }
    },
    props: {
        name: String,
        archetype: String,
        image: String,
        race: String,
    }
}
</script>

<template>
    <div class="card ms_card m-2">
        <img :src="image" class="card-img-top " :alt="name">
        <div class="card-body">
            <h6>{{ name }}</h6>
            <h6>{{ archetype }}</h6>
            <h6>{{ race }}</h6>
        </div>
    </div>
</template>

<style scoped lang="scss"> .ms_card {
     width: calc(100% / 5 - 1rem);
 }
</style>