<script>
import { store } from '../store';
export default {
    name: "MySearchBar",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container">
        <select class="archetypes">
            <option value="alien">Alien</option>
        </select>
    </div>
</template>

<style scoped lang="scss">
.archetypes {

    padding: 5px 10px;

}
</style>