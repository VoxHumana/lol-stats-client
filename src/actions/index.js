export const setSpinnerDisplay = display => ({
  type: 'SET_DISPLAY',
  display
})

export const hideError = () => ({
  type: 'HIDE_ERROR'
})

export const showError = (err) => ({
  type: 'SHOW_ERROR',
  message: err
})

export const setValid = (isValid) => ({
  type: 'SET_VALID',
  isValid
})

export const setName = (name) => ({
  type: 'SET_NAME',
  name
})

export const toggleDropdown = () => ({
  type: 'TOGGLE_DROPDOWN'
})

export const setRegion = region => ({
  type: 'SET_REGION',
  region
})

export const populateMatchList = matches => ({
  type: 'POPULATE_MATCHLIST',
  matches
})

export const eraseMatchList = () => ({
  type: 'ERASE_MATCHLIST'
})
