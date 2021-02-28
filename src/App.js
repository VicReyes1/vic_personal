
import './App.css';
import Login from './login'
import DatosVic from './mis_datos'
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Datos from './mis_datos';

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/login" exact={true}>
        {Login}
      </Route>
      <Route path ="/mis_datos">
        {DatosVic}
      </Route>
      <Route path="/">
        <React.Fragment>
        Welcome!
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/mis_datos">Page</Link>
        </nav>
        </React.Fragment>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
