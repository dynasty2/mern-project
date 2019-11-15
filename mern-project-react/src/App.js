import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from "react-router-dom";

render() {
  return (
    <div>
      <nav>
      // the link component produces an a element
        <Link to=""></Link>
        <Link to=""></Link>
      </nav>
      <main>
        // routes render the specified component we pass in
        <Route path="" render={}/>
        // we can give either a render or a component prop.
        <Route path="" component={}/>
      </main>
    </div>
  )
}

export default App;
