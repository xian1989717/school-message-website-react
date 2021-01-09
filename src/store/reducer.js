const defaultState = {
  list: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case 'POST_DATA':
      console.log(action.data)
      return state
    default:
      return state
  }
}
