import logo from './logo.svg';
import './App.css';
// import { Route, Link } from "react-router-dom";
import React, { Component } from 'react';
import axios from '../package.json';

// class App extends Component {
//   constructor(props){
//     super(props);

//     this.state = { 

//     };
//   }

// render() {
//   return (
//     <div>
//       <nav>
//         <Link to="">link1</Link>
//         <Link to="">link2</Link>
//       </nav>
//       <main>
//         <Route/>
//         <Route/>
//       </main>
//     </div>
//   )
// };
//   }
// export default App;

class App extends React.Component {
  // State will apply to the posts object which is set to loading by default
  state = {
    posts: [],
    isLoading: true,
    errors: null
  };
  // Now we're going to make a request for data using axios
  getPosts() {
    axios
      // This is where the data is hosted
      .get("https://json-api-amt.herokuapp.com/movie")
      // Once we get a response and store data, let's change the loading state
      .then(response => {
        this.setState({
          posts: response.data.posts,
          isLoading: false
        });
      })
      // If we catch any errors connecting, let's update accordingly
      .catch(error => this.setState({ error, isLoading: false }));
  }
  // Let's our app know we're ready to render the data
  componentDidMount() {
    this.getPosts();
  }
  // Putting that data to use
  render() {
    const { isLoading, posts } = this.state;
    return (
      <React.Fragment>
        <h2>Random Post</h2>
        <div>
          {!isLoading ? (
            posts.map(post => {
              const { _id, title, content } = post;
              return (
                <div key={_id}>
                  <h2>{title}</h2>
                  <p>{content}</p>
                  <hr />
                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default App;