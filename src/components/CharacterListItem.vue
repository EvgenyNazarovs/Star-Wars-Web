<template lang="html">
  <div class="character-item">
          <div class="character-name"> <b>{{character.name | upperCase}}</b></div>
    <div class="character-detail"> Height: {{character.height | toMeters}}
    <p>Homeworld: {{homeworld.name}}</p>
    <p>Terrain: {{homeworld.terrain}}</p>
  </div>
</div>
</template>

<script>

export default {
  name: 'CharacterListItem',
  props: ['character'],
  data(){
    return {
      homeworld: null
    }
  },
  filters: {
    toMeters(value){
      return `${(value/100)}m`
    }
  },
  methods: {
    getHomeworld(){
      fetch(this.character.homeworld).then(res => res.json())
      .then(data => this.homeworld = data)
    }
  },
  mounted(){
    this.getHomeworld()
  }
}
</script>

<style lang="css" scoped>
.character-item {
  /* list-style: none; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-style: solid #fff 1px;
  list-style-position: inside;
  font-size: 18px;
}

.character-name {
  float: left;
  width: 35%;
  text-align: left;
}

.character-detail {
  float: left;
  width: 50%;
  text-align: left;

}
</style>
