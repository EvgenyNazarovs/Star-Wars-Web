<template lang="html">
  <div v-if="film" id="filmDetail">
    <div id="detailWrapper">
      <div id="flexWrapper">
        <div id="left">
          <h2>{{film.title}}</h2>
          <h3><span>Episode </span>{{film.episode_id}}</h3>
          <p><span>Release Date: </span>{{film.release_date | moment('DD MMM YYYY') }}</p>
          <p><span>Director: </span>{{film.director}}</p>
        </div>
      </div>
    </div>
    <div id="character-list-wrapper">
      <CharacterList v-if="characters.length" :characters="characters"></CharacterList>
    </div>
  </div>
</template>

<script>

import CharacterList from './CharacterList';
import VueMoment from 'vue-moment';

export default {
  name: 'FilmDetail',
  props: ['film'],
  components: {
    CharacterList
  },
  data(){
    return {
      characters: []
    }
  },
  methods: {
    getCharacters(){
      const characterPromises = this.film.characters.map((characterUrl) => {
        return fetch(characterUrl).then(res => res.json())
      })
      Promise.all(characterPromises)
      .then(data => this.characters = data)
  }
},
  mounted(){
    this.getCharacters()
  },
  watch: {
    film(){
      this.getCharacters()
    }
  }
}
</script>

<style lang="css" scoped>
</style>
