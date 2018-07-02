import React, { Component } from 'react';
import './App.css';

import { kick, snare, hhopen, hhclosed, tom1, tom2, aux1, aux2 } from './sounds'

const context = new AudioContext();
const masterGain = context.createGain();
masterGain.connect(context.destination)


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Drum Sounds test environment</h1>
        </header>
        <div>
          <button onClick={() => kick(context)}>kick</button>
          <button onClick={() => snare(context)}>snare</button>
          <button onClick={() => tom1(context)}>tom1</button>
          <button onClick={() => tom2(context)}>tom2</button>
          <button onClick={() => hhopen(context)}>hhopen</button>
          <button onClick={() => hhclosed(context)}>hhclosed</button>
          <button onClick={() => aux1(context)}>aux1</button>
          <button onClick={() => aux2(context)}>aux2</button>
        </div>
      </div>
    );
  }
}

export default App;
