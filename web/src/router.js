import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './components/app/App';
import UploadGame from './components/UploadGame/UploadGame';

export default (
  
  <Router>
    <Switch location={window.location}>
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={App} />
      <Route exact path={`${process.env.PUBLIC_URL}/upload-game`} component={UploadGame} />
      <Route render={() => <div>Versus - Not Found</div>} />
    </Switch>
  </Router>
)