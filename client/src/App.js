import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
// import Jumbotron from "./components/Jumbotron";
import NavBar from "./components/Nav";
// import Books from "./pages/Books";
import Contact from "./pages/Contact";



function App() {
  return (
    <Router>
      <div>

        <NavBar />

        {/* <Jumbotron />
        <Switch>
          <Route exact path="/" 
          component={Books}
          />
          <Route exact path="/saved" component={Books}/>
        </Switch> */}
        <Route exact path="/" component={Contact}/>

      </div>
    </Router>
  )
}

export default App;
