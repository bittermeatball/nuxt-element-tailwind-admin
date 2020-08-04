import { root } from '~/constants/vuex/mutations'
// const queryString = require('query-string')
export default {
  // Called manually in middleware in SPA mode
  async nuxtServerInit({ commit }) {
    let auth = null
    const authString = await localStorage.getItem('auth')
    auth = await JSON.parse(authString)
    commit(root.SET.AUTH, auth)
    commit(root.SET.SERVER_STATE, true) // Server is ready
  },
  async login({ commit }, form) {
    console.log(form)
    const auth = {
      currentUser: {
        name: 'Someone',
        avatar:
          'https://assets.codepen.io/t-1003/internal/avatars/teams/default.png?format=auto&height=256&version=1513627136&width=256',
      },
      accessToken: 'yourAccessTokenFromBackend',
    }
    await setTimeout(() => {
      // We simulate the async request with timeout.
      // Replace the whole thing with a nice axios request to obtain the auth instance as usual
      // This use a constain as an example
    }, 1000)
    localStorage.setItem('auth', JSON.stringify(auth))
    commit(root.SET.AUTH, auth) // Mutating to store for client rendering
  },
  logout({ commit }) {
    localStorage.removeItem('auth')
    commit(root.SET.AUTH, null)
  },
}
