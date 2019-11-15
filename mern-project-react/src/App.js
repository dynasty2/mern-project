import logo from './logo.svg';
import './App.css';
import { Route, Link } from "react-router-dom";
import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
  }

render() {
  return (
    <div>
      <nav>
        <Link to="">link1</Link>
        <Link to="">link2</Link>
      </nav>
      <main>
        <Route/>
        <Route/>
      </main>
    </div>
  )
};
  }
export default App;
