const matches = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE':
      return action.matches.map(e => ({...e}))
    case 'ERASE':
      return []
    default:
      return state
  }
}

export default matches
