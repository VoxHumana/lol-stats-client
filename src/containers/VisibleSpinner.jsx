import { connect } from 'react-redux'
import Spinner from '../components/Spinner'

const mapStateToProps = (state) => {
  return {
    show: state.showSpinner
  }
}

export default connect(
  mapStateToProps
)(Spinner)
