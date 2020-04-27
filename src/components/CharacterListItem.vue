<template lang="html">
  <li>
           Name: <b>{{character.name}}</b>
    <span> Height: {{character.height | toMeters}}</span>
    <p>Homeworld: {{homeworld.name}}</p>
    <p>Terrain: {{homeworld.terrain}}</p>
  </li>
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
li {
  list-style: none;
  color: darkslategrey;
  line-height: 1.4;
  font-size: 1.2em;
  width: 100%
}
</style>
