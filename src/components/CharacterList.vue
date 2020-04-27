<template lang="html">
  <div v-if="characters" class="character-list">
    <h3>Character List</h3>
    <ul>
      <CharacterListItem v-for="(character, index) in characters"
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
}
</style>
