import React, { Component } from 'react';
import '../src/styles/main.scss'
import FilterBar from './components/FilterBar/FilterBar';
import { connect } from 'react-redux';
import { setAuthToken } from './redux/actions/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        setAuthToken: authToken => dispatch(setAuthToken(authToken))
    }
}
class App extends Component {
  componentDidMount() {
    const authToken = prompt("Please enter authorization token");
    this.props.setAuthToken(authToken);
  }

  render() {
    return (
      <div className="main-layout">
        <FilterBar />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(App);
