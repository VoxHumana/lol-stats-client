const dropdown = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_DROPDOWN':
      return !state
    default:
      return state
  }
}

export default dropdown
