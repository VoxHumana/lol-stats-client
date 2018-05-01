const searchName = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE':
      return action.text
    default:
      return state
  }
}

export default searchName
