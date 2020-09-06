import React, { Component } from 'react';
import '../src/styles/main.scss'
import FilterBar from './components/FilterBar/FilterBar';
import { connect } from 'react-redux';
import { setAuthToken } from './redux/actions/actions';
import QuotesDisplay from './components/Grid/QuotesDisplay';

const mapDispatchToProps = (dispatch) => {
    return {
        setAuthToken: authToken => dispatch(setAuthToken(authToken))
    }
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authLoaded: false
    };
  }
  componentDidMount() {
    const authToken = prompt("Please enter authorization token");
    this.props.setAuthToken(authToken);
    this.setState({
      authLoaded: true
    });
  }

  render() {
    if (this.state.authLoaded){
      return (
        <div className="main-layout">
          <FilterBar />
          <QuotesDisplay />
        </div>
      );
    }
    else {
      return (
        <div>No Token Provided</div>
      )
    }
  }
}

export default connect(null, mapDispatchToProps)(App);
