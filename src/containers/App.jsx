import React from 'react'
import App from '../components/App'
import { connect } from 'react-redux'
import Match from '../components/Match'
import Regions from '../regions'
import { populateMatchList, showError, setSpinnerDisplay } from '../actions'

const mapStateToProps = state => ({
  error: state.error,
  displaySpinner: state.displaySpinner,
  matches: state.matches
})

const mapDispatchToProps = dispatch => ({
  onFetchSummonerMatches: async (name, region) => {
    try {
      const req = new Request(`https://agile-garden-71195.herokuapp.com/summoner/${name}?region=${Regions[region.toLowerCase()]}`)
      const res = await window.fetch(req)
      const data = await res.json()
      console.log(data)
      dispatch(setSpinnerDisplay(false))
      dispatch(populateMatchList(data.map((match) => {
        return <Match matchDetails={match} />
      })))
    } catch (err) {
      console.log(err)
      dispatch(showError('Embrace the darkness... - Nocturne (error retrieving information)'))
    }
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
