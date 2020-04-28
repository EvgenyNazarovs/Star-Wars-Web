<template lang="html">
<div class="film-item" @click="onClick">{{film.title}}</div>
</template>

<script>

import {eventBus} from '@/main.js'

export default {
  name: 'FilmListItem',
  props: ['film'],
  data() {
    return {
    selectedFilm: {}
  }
  },
  methods: {
    onClick(){
      eventBus.$emit('selected-film', this.film)
    }
  }
}
</script>

<style lang="css" scoped>
.film-item {
  font-size: 35px;
  width: 200px;
  padding-top: 10px;
}

</style>
