import { combineReducers } from 'redux'
import dropdown from './dropdown'
import error from './error'
import displaySpinner from './displaySpinner'
import isValid from './isValid'
import matches from './matches'
import region from './region'
import summonerName from './summonerName'

export default combineReducers({
  dropdown,
  error,
  displaySpinner,
  isValid,
  matches,
  region,
  summonerName
})
