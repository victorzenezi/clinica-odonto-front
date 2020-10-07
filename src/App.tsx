import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Schedule from './pages/Schedule/Schedule'

require('dotenv').config()

function App() {
  return (
    <>
      <Router>

        {/* Rotas */}
        <Switch>
          <Route path="/agenda">
            <Schedule/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
    </Router>

    <GlobalStyles/>
    </>

  );
}

export default App;
