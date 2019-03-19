import React, { Component } from 'react';
import './App.css';
import TrafficLight from './Light/TrafficLight';
import EastWest from "./Light/EastWest";

class App extends Component {

  render() {
    return (
      <div>
        <div className='north'>
            <TrafficLight />
        </div>
        <div className='east'>
            <EastWest />
        </div>
        <div className='west'>
            <EastWest />
        </div>
        <div className='south'>
            <TrafficLight />
        </div>
      </div>
    );
  }
}

export default App;
