export default {
  async fetchData({ rootState }) {
    const response = await this.$axios.get('/users', {
      // headers: {
      //   Authorization: rootState.auth != null ? rootState.auth.token : '',
      // },
    })
    return response
  },
  async fetchMoreData({ rootState }) {
    const response = await this.$axios.get('/users', {
      // headers: {
      //   Authorization: rootState.auth != null ? rootState.auth.token : '',
      // },
    })
    return response
  },
  async fetchSingle({ rootState }, id) {
    const response = await this.$axios.get('/users/' + id, {
      // headers: {
      //   Authorization: rootState.auth != null ? rootState.auth.token : '',
      // },
    })
    return response
  },
  async submitSingle({ rootState }, form) {
    const response = await this.$axios.post('/users', form, {
      // headers: {
      //   Authorization: rootState.auth != null ? rootState.auth.token : '',
      // },
    })
    return response
  },
  async updateSingle({ rootState }, data) {
    const response = await this.$axios.put('/users/' + data.id, data.form, {
      // headers: {
      //   Authorization: rootState.auth != null ? rootState.auth.token : '',
      // },
    })
    return response
  },
}
