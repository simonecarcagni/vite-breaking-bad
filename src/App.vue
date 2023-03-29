<script>
import axios from 'axios';
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';

export default {
  components: {
    TheMain,
    TheHeader,
  },
  data() {
    return {

    }
  },
  created() {
    axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php').then(
      response => {
        console.log(response);
      }
    )
  }
} 
</script>

<template>
  <TheHeader title="Yu-Gi-Oh Api" />
  <TheMain />
</template>

<style lang="scss">
@use "./styles/general.scss"
</style>
