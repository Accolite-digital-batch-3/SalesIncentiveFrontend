import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
<<<<<<< HEAD


=======
>>>>>>> 97146a7e0b0fbf03ed4cb76bc5a79a1735ec9572
import './App.css';
import Adminpage from './Components/Home/Adminpage';
import Login from "./Components/Login/Login.js";


function App() {
  return (
    <Router>
      <Switch>
      <Route exact path={["/", "/login"]} >
<<<<<<< HEAD
          <Login />
        </Route>
        <Route exact path={["/admin"]}>
          <Adminpage/>
        </Route>
=======
        <Login />
      </Route>
>>>>>>> 97146a7e0b0fbf03ed4cb76bc5a79a1735ec9572
      </Switch>
    </Router>
      
    
  );
}

export default App;
