import { root } from '~/constants/vuex/mutations'
export default {
  // Communicate with Devtools
  [root.SET.LANG](state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
      localStorage.setItem('locale', locale)
    }
  },
  [root.SET.SERVER_STATE](state, serverReady) {
    state.serverReady = serverReady
  },
  [root.SET.AUTH](state, auth) {
    state.auth = auth
  },
  // Options
  [root.TOGGLE.SIDEBAR_COLLAPSE](state) {
    state.options.sidebarCollapsed = !state.options.sidebarCollapsed
  },
}
