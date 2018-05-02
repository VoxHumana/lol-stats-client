const matches = (state = null, action) => {
  switch (action.type) {
    case 'POPULATE_MATCHLIST':
      return action.matches.map(e => ({...e}))
    case 'ERASE_MATCHLIST':
      return null
    default:
      return state
  }
}

export default matches
