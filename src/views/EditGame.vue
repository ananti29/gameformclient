<template>
  <div class="games">
    <h1 class="title">Edit Game</h1>
      <div class="form">
        <div>
          <input type="text" required=true name="gamename" placeholder="Enter game name." v-model="gamename">
        </div>
        <div>
          <select name="platform" required=true v-model="platform">
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
          <button class="app_edit_btn" @click="updateGame">Edit</button>
        </div>
         <p v-show=errormessage> {{errormessage}} </p>
      </div>
  </div>
</template>

<script>
import GamesService from '../services/gameservice'
export default {
  name: 'EditGame',
  data () {
    return {
      gamename: '',
      platform: 'Xbox',
      notes: '',
      errormessage: ''
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
    async updateGame () {
      this.errormessage = ''
      if (this.platform === 'Xbox' || this.platform === 'Playstation' || this.platform === 'PC') {
        await GamesService.updateGame({
          id: this.$route.params.id,
          gamename: this.gamename,
          platform: this.platform,
          notes: this.notes
        })
        this.$router.push({ name: 'Games' })
      } if (this.platform !== 'Xbox' || this.platform !== 'Playstation' || this.platform !== 'PC') {
        this.errormessage = 'Platform value needs to be Xbox, Playstation or PC'
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

.app_edit_btn {
    width: 500px;
  }

@media (max-width: 767px) {
  .form input, .form textarea {
    width: 100%;
    margin-left: -10px;
  }
  .app_edit_btn {
    width: 100%;
  }
}
</style>
