import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";

function App() {

  return (
<>
    <Router>
      <Switch>
        <Route path={["/form", "/form"]} component={Form} />
        <Route exact path={["/dashboard", "/"]} component={Dashboard}></Route>
        <Route path="localhost:3000/dashboard" exact component={Dashboard}></Route>
    </Switch>
  </Router>
</>
  );
}

export default App;
