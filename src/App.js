import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


import './App.css';
import Adminpage from './Components/Home/Adminpage';
import Login from "./Components/Login/Login.js";


function App() {
  return (
    <Router>
      <Switch>
      <Route exact path={["/", "/login"]} >
          <Login />
        </Route>
        <Route exact path={["/admin"]}>
          <Adminpage/>
        </Route>
      </Switch>
    </Router>
      
    
  );
}

export default App;
