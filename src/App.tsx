import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Router>

        {/* Rotas */}
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
    </Router>

    <GlobalStyles/>
    </>

  );
}

export default App;
