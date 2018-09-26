// node_modules
import React, { Component } from 'react';
import { connect } from 'react-redux';

// redux
import store from '@versus-store';
import actions from '@versus-actions';

// sub-components
// babel aliases

class App extends Component {

  componentDidMount() {
    console.log('mounted');
    store.dispatch(actions.leagues.getLeagues())
  }

  render() {

    const { leagues } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Versus Rooter</h1>
        </header>
        <p className="App-intro">
          {leagues && leagues.request.responseText}
        </p>
      </div>
    );
  }
}

const storeToProps = store => {
  return {
    leagues: store.leaguesReducer.leagues
  }
}

export default connect(storeToProps)(App);