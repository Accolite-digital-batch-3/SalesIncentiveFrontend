import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import styled from 'styled-components'
import './App.css';
import Adminpage from './Components/Home/Adminpage';
import Login from "./Components/Login/Login.js";
import Sidebar from './Components/SalesPage/Sidebar'
import Dashboard from './Components/SalesPage/Dashboard'


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
        <Route exact path={["/sales"]} > 
        <Sidebar/>
        <Dashboard />
        </Route>
      </Switch>
    </Router>
      
    
  );
}

export default App;
const Div = styled.div `
position: relative;
`;