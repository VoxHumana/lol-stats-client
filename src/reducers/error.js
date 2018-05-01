const DEFAULT = {
  display: false,
  message: ''
}

const error = (state = DEFAULT, action) => {
  switch (action.type) {
    case 'SHOW':
      return {
        display: true,
        message: action.message
      }
    case 'HIDE':
      return {
        display: false,
        message: ''
      }
    default:
      return state
  }
}

export default error
