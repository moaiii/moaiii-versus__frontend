import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './components/app/App';

export default (
  <Router>
    <div className='Router__container'>
      <Switch location={window.location}>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={App}/>
        <Route render={() => <div>Versus - Not Found</div>} />
      </Switch>
    </div>
  </Router>
)