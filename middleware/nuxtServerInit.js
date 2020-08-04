import { root } from '~/constants/vuex/actions'
export default async function ({ store }) {
  // console.log(store.state.message)
  if (!store.state.serverReady) {
    await store.dispatch(root.NUXT_SERVER_INIT)
  }
}
