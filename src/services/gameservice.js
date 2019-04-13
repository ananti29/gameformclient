import api from './api'

export default {
  fetchGames () {
    return api().get('games')
  },

  addGame (params) {
    return api().post('add_game', params)
  },

  updateGame (params) {
    return api().put('games/' + params.id, params)
  },

  getGame (params) {
    return api().get('game/' + params.id)
  },

  deleteGame (params) {
    return api().delete('games/' + params.id)
  }
}
