import React from 'react';
import { Switch, Route } from 'react-router';
import HomePage from 'pages/HomePage';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
    </Switch>
  );
}

export default App;
