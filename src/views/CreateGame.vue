<template>
  <div class="games">
    <h1>Create Game</h1>
      <div class="form">
        <div>
          <input type="text" name="gamename" placeholder="Enter game name." v-model="gamename">
        </div>
        <div>
          <select name="platform" v-model="platform">
              <option>Xbox</option>
              <option>Playstation</option>
              <option>PC</option>
          </select>
          <span> Selected: {{ platform }}</span>
        </div>
        <div>
          <textarea rows="15" cols="15" placeholder="Add your opinion about the game, progress or anything else that comes to mind." v-model="notes"></textarea>
        </div>
        <div>
          <button class="app_game_btn" @click="addGame">Add</button>
        </div>
      </div>
  </div>
</template>

<script>
import GamesService from '../services/gameservice'
export default {
  name: 'CreateGame',
  data () {
    return {
      gamename: '',
      platform: 'Xbox',
      notes: ''
    }
  },
  methods: {
    async addGame () {
      await GamesService.addGame({
        gamename: this.gamename,
        platform: this.platform,
        notes: this.notes
      })
      this.$router.push({ name: 'Games' })
    }
  }
}
</script>
<style lang="scss" scoped>
.form input, .form textarea {
  width: 50em;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_game_btn {
  background: #009900;
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
