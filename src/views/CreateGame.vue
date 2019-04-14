<template>
  <div class="games">
    <h1 class="title">Create Game</h1>
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
          <button class="app_create_btn" @click="addGame">Create</button>
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
@import "../scss/variables";
@import "../scss/buttons";
@import "../scss/forms";

.title {
  color: $titlecolor;
}
.app_create_btn {
    width: 500px;
  }

@media (max-width: 767px) {
  .form input, .form textarea {
    width: 100%;
    margin-left: -10px;
  }
  .app_create_btn {
    width: 100%;
  }
}
</style>
