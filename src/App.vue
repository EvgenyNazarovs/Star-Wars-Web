<template lang="html">
<div>
    <h1>Star Wars Films</h1>
    <FilmList :films="films"></FilmList>
    <FilmDetail v-if="selectedFilm" :film="selectedFilm"></FilmDetail>
</div>
</template>

<script>

import FilmList from './components/FilmList';
import FilmListItem from './components/FilmListItem';
import FilmDetail from './components/FilmDetail';
import {eventBus} from './main.js';
import VueMoment from 'vue-moment';


export default {
  name: 'App',
  components: {
    FilmList,
    FilmListItem,
    FilmDetail
  },
  data(){
    return {
      films: [],
      selectedFilm: null,
    }
  },
  mounted(){
    fetch('https://swapi.dev/api/films/')
    .then(res => res.json())
    .then(data => this.films = data.results);

    eventBus.$on('selected-film', (film) => {
      this.selectedFilm = film
    })
  }
}
</script>

<style lang="css" scoped>
</style>
