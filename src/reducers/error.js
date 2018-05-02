const DEFAULT = {
  display: false,
  message: ''
}

const error = (state = DEFAULT, action) => {
  switch (action.type) {
    case 'SHOW_ERROR':
      return {
        display: true,
        message: action.message
      }
    case 'HIDE_ERROR':
      return {
        display: false,
        message: ''
      }
    default:
      return state
  }
}

export default error
