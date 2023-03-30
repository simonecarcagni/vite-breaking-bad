<script>
import axios from 'axios';
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';
import MySearchBar from './components/MySearchBar.vue';
import Loading from './components/Loading.vue';
import { store } from './store.js';

export default {
  components: {
    TheMain,
    TheHeader,
    Loading,
    MySearchBar,
  },
  data() {
    return {
      store
    }
  },
  methods: {
    archetypeSearch() {

      let standardUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

      if (this.store.optionsValue == '') {
        standardUrl;
      } else {
        standardUrl += `?archetype=${this.store.optionsValue}`;
      }

      axios.get(standardUrl)
        .then(
          response => {
            this.store.cardsList = response.data.data;
          }
        )

    }
  },
  created() {
    axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
      .then(
        response => {
          this.store.cardsList = response.data.data;
          this.store.loading = false;
        }
      )

    axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
      .then(
        response => {
          this.store.archetypeList = response.data;
        }
      )
  }
} 
</script>

<template>
  <TheHeader title="Yu-Gi-Oh Api" />
  <MySearchBar @ChangeValue="archetypeSearch" />
  <TheMain />
  <Loading />
</template>

<style lang="scss">
@use "./styles/general.scss"
</style>
