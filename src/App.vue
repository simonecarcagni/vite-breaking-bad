<script>
import axios from 'axios';
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';
import { store } from './store.js';

export default {
  components: {
    TheMain,
    TheHeader,
  },
  data() {
    return {
      store
    }
  },
  created() {
    axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
      .then(
        response => {
          this.store.cardsList = response.data;
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
