import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from 'react';
// import axios from '../package.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import MoviesList from './components/MoviesList';
import EditMovie from './components/EditMovie';
import CreateMovie from './components/CreateMovie';

class App extends Component {
  constructor(props){
    super(props);

    this.state = { 

    };
  }

render() {
  return (
    <Router>
    <div className="container">
      <h2>Mern Stack shit hott</h2>
    <Route path="/" exact component={MoviesList} />
    <Route path="/edit/:id" component={EditMovie} />
    <Route path="/create" component={CreateMovie} /> 
    </div> 
    </Router>
  )
};
  }
export default App;