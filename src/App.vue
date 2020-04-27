<template lang="html">
<div>
    <h1>Star Wars Films</h1>
    <FilmList :films="films"></FilmList>
</div>
</template>

<script>

import FilmList from './components/FilmList'
import FilmListItem from './components/FilmListItem'

export default {
  name: 'App',
  components: {
    FilmList,
    FilmListItem
  },
  data(){
    return {
      films: []
    }
  },
  mounted(){
    fetch('https://swapi.dev/api/films/')
    .then(res => res.json())
    .then(data => this.films = data.results)
  }
}
</script>

<style lang="css" scoped>
</style>
