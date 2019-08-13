import { connect } from 'react-redux';
import { clearError } from '../../actions';
import ShowErrors from '../ui/ShowErrors'

const mapStateToProps = (state) => {
  return {
    errors: state.errors,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClearError(index) {
      dispatch(clearError(index));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowErrors);
