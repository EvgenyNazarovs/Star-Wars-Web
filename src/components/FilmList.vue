<template lang="html">
<ul>
  <FilmListItem v-for="(film, index) in films"
                :film="film"
                :key="index"
                ></FilmListItem >
</ul>
</template>

<script>

import FilmListItem from './FilmListItem';

export default {
  name: 'FilmList',
  props: ['films'],
  components: {
    FilmListItem
  }
}
</script>

<style lang="css" scoped>
ul {
  list-style-type: none;
}
</style>
