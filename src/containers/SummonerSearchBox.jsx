import { connect } from 'react-redux'
import { setSpinnerDisplay, hideError, showError, setValid, setName, toggleDropdown, setRegion, eraseMatchList } from '../actions'
import SummonerSearchBox from '../components/SummonerSearchBox'

const mapStateToProps = state => ({
  isValid: state.isValid,
  region: state.region,
  summonerName: state.summonerName,
  dropdown: state.dropdown
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  validateName: name => {
    dispatch(hideError())
    const isValid = /^[\w\s]{3,16}$/g.test(name)
    dispatch(setValid(isValid))
    dispatch(setName(name))
  },
  toggle: () => {
    dispatch(toggleDropdown())
  },
  selectRegion: region => {
    dispatch(hideError())
    dispatch(setRegion(region))
  },
  showError: (err) => {
    dispatch(setSpinnerDisplay(false))
    dispatch(showError(err))
  },
  fetchMatches: async (name, region) => {
    dispatch(hideError())
    dispatch(eraseMatchList())
    dispatch(setSpinnerDisplay(true))
    await ownProps.onFetchSummonerMatches(name, region)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SummonerSearchBox)
