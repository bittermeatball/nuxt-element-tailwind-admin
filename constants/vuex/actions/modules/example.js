// For dispatching actions in another action in the same module
// Use { root: true } as the third argument
export default {
  FETCH: {
    DATA: 'example/fetchData',
    MORE: 'example/fetchMoreData',
    SINGLE: 'example/fetchSingle',
  },
  SUBMIT: {
    MULTIPLE: 'example/submitMultiple',
    SINGLE: 'example/submitSingle',
  },
  UPDATE: {
    MULTIPLE: 'example/updateMultiple',
    SINGLE: 'example/updateSingle',
  },
  DELETE: {
    MULTIPLE: 'example/deleteMultiple',
    SINGLE: 'example/deleteSingle',
  },
}
