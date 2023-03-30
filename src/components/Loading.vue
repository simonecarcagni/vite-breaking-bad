<script>
import { store } from '../store.js';
export default {
    name: 'Loading',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="loading" v-if="store.loading">
        <h1>Caricamento in corso...</h1>
    </div>
</template>


<style lang="scss" scoped>
.loading {
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>