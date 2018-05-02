const isValid = (state = true, action) => {
  switch (action.type) {
    case 'SET_VALID':
      return action.isValid
    default:
      return state
  }
}

export default isValid
