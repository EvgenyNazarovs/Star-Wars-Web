<template lang="html">
  <div v-if="characters" class="character-list">
    <h3>CHARACTER LIST:</h3>
    <ul>
      <CharacterListItem class="list-item" v-for="(character, index) in characters"
                         :key="index"
                         :character="character"
      ></CharacterListItem>
    </ul>
  </div>
</template>

<script>

import CharacterListItem from './CharacterListItem'

export default {
  name: 'CharacterList',
  props: ['characters'],
  components: {
    CharacterListItem
  }
}
</script>

<style lang="css" scoped>
.character-list {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: row;
}

.list-item {
  border-bottom: 0.1px solid grey;

  margin-bottom: 20px;
}

</style>
