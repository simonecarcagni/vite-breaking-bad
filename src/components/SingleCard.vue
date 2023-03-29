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
    }
}
</script>

<template>
    <div class="card ms_card m-2">
        <img :src="image" class="card-img-top " :alt="name">
        <div class="card-body">
            <h5>{{ name }}</h5>
            <h5>{{ archetype }}</h5>
        </div>
    </div>
</template>

<style scoped lang="scss"> .ms_card {
     height: 300px;
     width: calc(100% / 5 - 1rem);
 }
</style>