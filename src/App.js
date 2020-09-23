import React, { Component } from 'react';
import '../src/styles/main.scss'
import FilterBar from './components/FilterBar/FilterBar';
import { connect } from 'react-redux';
import { setAuthToken } from './redux/actions/actions';
import QuotesDisplay from './components/Grid/QuotesDisplay';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const mapDispatchToProps = (dispatch) => {
    return {
        setAuthToken: authToken => dispatch(setAuthToken(authToken))
    }
};

const mapStateToProps = (state) => {
  return {
      authToken: state.authToken
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authLoaded: false
    };
    this.promptSetAuthToken = this.promptSetAuthToken.bind(this);
  }

  promptSetAuthToken() {
    const authToken = prompt("Please enter authorization token");
    if (authToken !== null && authToken !== "") {
      this.props.setAuthToken(authToken);
    }
    this.setState({
      authLoaded: true
    });
  }

  componentDidMount() {
    if (!this.props.authToken){
      this.promptSetAuthToken();
    }
    else {
      this.setState({
        authLoaded: true
      })
    }
  }
  
  render() {
    if (this.state.authLoaded){
      return (
        <div className="main-layout">
          <FilterBar />
          <QuotesDisplay />
          <ToastContainer autoClose={2500} />
          <button className="reenterAuth" onClick={this.promptSetAuthToken}>Re-enter auth token</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
