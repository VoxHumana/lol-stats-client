const displaySpinner = (state = false, action) => {
  switch (action.type) {
    case 'SET_DISPLAY':
      return action.display
    default:
      return false
  }
}

export default displaySpinner
