// node_modules
import React, { Component } from 'react';
import {connect} from 'react-redux';

// redux
import store from '@versus-store';

// sub-components
// ........

class App extends Component {
  render() {
    const {leagues} = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Versus Root</h1>
        </header>
        <p className="App-intro">
          {leagues}
        </p>
      </div>
    );
  }
}

const storeToProps = (store) => {
  return {
    leagues: store.leaguesReducer.leagues
  }
}

export default connect(storeToProps)(App);