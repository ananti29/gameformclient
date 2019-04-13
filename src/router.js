import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Games from './views/Games'
import CreateGame from './views/CreateGame'
import EditGame from './views/EditGame'
import DeleteGame from './views/DeleteGame'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/games',
      name: 'Games',
      component: Games
    },
    {
      path: '/games/new',
      name: 'CreateGame',
      component: CreateGame
    },
    {
      path: '/games/:id/edit',
      name: 'EditGame',
      component: EditGame
    },
    {
      path: '/games/:id',
      name: 'DeleteGame',
      component: DeleteGame
    }
  ]
})
