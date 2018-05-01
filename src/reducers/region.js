const region = (state = 'NA', action) => {
  switch (action.type) {
    case 'UPDATE':
      return action.region
    default:
      return state
  }
}

export default region
