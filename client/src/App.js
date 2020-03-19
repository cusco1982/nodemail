import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import NavBar from "./components/Nav";
import Books from "./pages/Books";
import Contact from "./pages/Contact";




function App() {
  return (
    <Router>
      <div>

        <NavBar/>
        <Jumbotron />
        
        <Switch>
          <Route exact path="/" component={Books}/>
          <Route exact path="/saved" component={Books}/>
          <Route exact path="/contact"/>
        </Switch>
        
      </div>
    </Router>
  )
}

export default App;
