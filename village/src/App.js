import React, { Component } from 'react';
import axios from 'axios';
import {Route, NavLink} from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount(){
    axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      console.log(response.data);
      this.setState({
        smurfs: response.data,
      })
    })
  }

  render() {
    return (
      <div className="App">
        {/* <SmurfForm />
        <Smurfs smurfs={this.state.smurfs} /> */}
        <nav>
          <NavLink exact to="/">Smurf Village</NavLink>
          <NavLink to='/smurf-addform'>Add New</NavLink>
          
        </nav>
        <Route path='/smurf-addform' component={SmurfForm}/>
        <Route path='/' render={props => {
          return (<Smurfs {...props} smurfs={this.state.smurfs} />)
        }}/>
        
      </div>
    );
  }
}

export default App;
