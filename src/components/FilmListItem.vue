<template lang="html">
<li @click="onClick">{{film.title}}</li>
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

</style>
