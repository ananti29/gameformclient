<template>
  <div class="games">
    <h1>Delete Game</h1>
      <div class="form">
        <div>
          <input type="text" disabled name="gamename" placeholder="Enter game name." v-model="gamename">
        </div>
        <div>
          <span> Platform: {{ platform }}</span>
        </div>
        <div>
          <textarea disabled rows="15" cols="15" placeholder="Add your opinion about the game, progress or anything else that comes to mind." v-model="notes"></textarea>
        </div>
        <div>
          <button class="app_game_btn" @click="deleteGame">Delete</button>
        </div>
      </div>
  </div>
</template>

<script>
import GamesService from '../services/gameservice'
export default {
  name: 'DeleteGame',
  data () {
    return {
      gamename: '',
      platform: '',
      notes: '',
      id: this.$route.params.id
    }
  },
  mounted () {
    this.getGame()
  },
  methods: {
    async getGame () {
      const response = await GamesService.getGame({
        id: this.$route.params.id
      })
      this.gamename = response.data.gamename
      this.platform = response.data.platform
      this.notes = response.data.notes
      // this.$router.push({ name: 'Games' })
    },
    async deleteGame () {
      let result = confirm('Are you sure you want to delete this game?')
      if (result) {
        await GamesService.deleteGame({
          id: this.$route.params.id
        })
        this.$router.push({ name: 'Games' })
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_game_btn {
  background: #cc0000;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>
