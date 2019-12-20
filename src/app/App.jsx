import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../store/store';
import Todo from '../pages/Todo';

const App = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={props => <Todo {...props} />} />
      </Switch>
    </ConnectedRouter>
  );
};

export default App;
