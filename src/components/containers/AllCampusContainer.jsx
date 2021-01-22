import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAllCampusThunk } from '../../thunks';
import { AllCampusView } from '../views';

// Smart container;
class AllCampusContainer extends Component {
  componentDidMount() {
    this.props.fetchAllCampus();
  }

  render() {
    return <AllCampusView allCampus={this.props.allCampus} />
  }
}

// Map state to props;

const mapState = state => {
    console.log('State: ' , state)
  return {
    allCampus: state.allCampus
  }
}

// Map dispatch to props;
const mapDispatch = dispatch => {
  return {
    fetchAllCampus: () => dispatch(fetchAllCampusThunk())
  }
}

// Type check props;
// AllPlayersContainer.propTypes = {
//   allStudents: PropTypes.array.isRequired,
//   fetchAllStudents: PropTypes.func.isRequired
// }

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllCampusContainer);