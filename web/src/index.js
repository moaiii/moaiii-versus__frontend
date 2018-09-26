import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import router from './router';
import { Provider } from 'react-redux';
import store from '@versus-store';


import './stylesheets/index.css';

class VersusRoot extends Component {
  render() {
    return (
      <div className="VersusRoot__container">
        {router}
      </div>
    );
  }
}

ReactDOM.render(<Provider store={store}><VersusRoot /></Provider>,
  document.getElementById('root'));