<template lang="html">
  <div v-if="film">
    <div id="detailWrapper">
      <div id="flexWrapper">
        <div id="left">
          <h2>{{film.title | upperCase}}</h2>
          <div class="film-item-detail">
          <h3><span>Episode </span>{{film.episode_id}}</h3>
          <p><span>Release Date: </span>{{film.release_date | moment('DD MMM YYYY') }}</p>
          <p><span>Director: </span>{{film.director}}</p>
        </div>
        </div>
      </div>
    </div>
    <div id="right">
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
  },
  filters: {
    upperCase(value){
      return value.toUpperCase()
    }
    }
  }
</script>

<style lang="css" scoped>
#filmDetail {
  width: 100vw;
  display: block;
  text-align: center;
}

#detail-wrapper {
  width: 800px;
  display: inline-block;
}

#left {
  float: left;
  width: 40%;
  border: solid grey 2px;
  margin-right: 60px;
}

#right {
  float: left;
  width: 50%;
}

p {
  font-size: 18px;
}

</style>
