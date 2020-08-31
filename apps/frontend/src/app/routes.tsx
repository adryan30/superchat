import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Chatroom from './pages/Chatroom';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/chat" component={Chatroom} />
    </Switch>
  );
};

export default Routes;
