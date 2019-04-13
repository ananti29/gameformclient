<template>
  <div class="games">
    <h1>Games</h1>
    <div class="card" v-for="game of games">
      <p>
        <span> <b>Game name:</b> {{ game.gamename }}</span> <br> <br>
        <span> <b>Platform:</b> {{ game.platform }}</span> <br> <br>
        <span> <b>Notes:</b> {{ game.notes }}</span> <br> <br> <br>
        <router-link :to="{ name: 'EditGame', params: {id: game._id } }" class="app_edit_btn">Edit game</router-link>
        <router-link :to="{ name: 'DeleteGame', params: {id: game._id } }" class="app_delete_btn">Delete game</router-link>
      </p>
    </div>
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
   .card {
       width: 50em;
       margin-left: auto;
       margin-right: auto;
       padding-top: 1em;
       padding-bottom: 1em;
       box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
   }
  .app_edit_btn {
    background: #4d7ef7;
    color: #fff;
    padding: 10px 25px;
    margin-right: 30px;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    text-decoration: none;
    cursor: pointer;
    display: inline-block;
}
.app_delete_btn {
    background: #cc0000;
    color: #fff;
    padding: 10px 25px;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    text-decoration: none;
    cursor: pointer;
    display: inline-block;
}
</style>
