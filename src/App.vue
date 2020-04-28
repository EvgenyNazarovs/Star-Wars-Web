<template lang="html">
<div>

    <h1>STAR WARS ENCYCLOPEDIA</h1>
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

<style lang="css">
body {
  background-image: url('https://win.heart.co.uk/starwars-galaxy/img/bg-fallback.jpg');
  color: #fff;
  width: 100vw;
  display: block;
  text-align: center;
  font-family: 'Pathway Gothic One', sans-serif;
}
</style>

<style scoped>

h1 {
  font-size: 80px;
  text-align: center;
  margin: 0;
  padding: 0;
}

</style>
