<template lang="html">
  <div>
    <div class="grid-list-container">

        <div class="grid">
  <FilmListItem class="list" v-for="(film, index) in films"
                :film="film"
                :key="index"
                ></FilmListItem >

      </div>
        </div>
</div>
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
.grid-list-container {
  margin-left: 40px;
  margin-right: 50px;
}

.grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 40px;
  text-align: center;
  justify-content: space-between;
}

.list {
  border-radius: 5%;
  flex: 1, 0, auto;
}

</style>
