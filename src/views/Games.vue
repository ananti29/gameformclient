<template>
  <div class="games">
    <h1 class="title">Games</h1>
    <div class="card" v-for="game of games">
      <p class= "gameslist">
        <span> <b>Game name:</b> {{ game.gamename }}</span> <br> <br>
        <span> <b>Platform:</b> {{ game.platform }}</span> <br> <br>
        <span> <b>Notes:</b> {{ game.notes }}</span> <br> <br> <br>
        <router-link :to="{ name: 'EditGame', params: {id: game._id } }" class="app_edit_btn">Edit game</router-link>
        <router-link :to="{ name: 'DeleteGame', params: {id: game._id } }" class="app_delete_btn">Delete game</router-link>
      </p>
    </div>
    <p v-if="!games.length">No data in games. You can create one by going to Create Game</p>
  </div>
</template>
<script>
import GamesService from '../services/gameservice'
export default {
  name: 'games',
  data () {
    return {
      games: []
    }
  },
  mounted () {
    this.getGames()
  },
  methods: {
    async getGames () {
      const response = await GamesService.fetchGames()
      this.games = response.data
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/variables";
@import "../scss/buttons";

    .title {
      color: $titlecolor;
    }
    .app_edit_btn {
      margin-right: 30px;
    }
    .card {
       width: 50em;
       margin-left: auto;
       margin-right: auto;
       padding-top: 1em;
       padding-bottom: 1em;
       box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }
   .gameslist {
     text-align: left;
     display: inline-block;
   }
@media (max-width: 767px) {
   .card {
     width: 100%;
   }
}
</style>
