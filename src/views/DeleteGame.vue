<template>
  <div class="games">
    <h1 class="title">Delete Game</h1>
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
          <button class="app_delete_btn" @click="deleteGame">Delete</button>
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
@import "../scss/variables";
@import "../scss/buttons";
@import "../scss/forms";

.title {
  color: $titlecolor;
}
.app_delete_btn {
    width: 500px;
  }

@media (max-width: 767px) {
  .form input, .form textarea {
    width: 100%;
    margin-left: -10px;
  }
  .app_delete_btn {
    width: 100%;
  }
}
</style>
