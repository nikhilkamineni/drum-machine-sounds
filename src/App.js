import React, { Component } from 'react';
import './App.css';

import { kick, snare, hhopen, hhclosed, tom1, tom2, aux1, aux2 } from './sounds'

const context = new AudioContext() || new window.webkitAudioContext();
const masterGain = context.createGain().connect(context.destination);
const kickGain = context.createGain().connect(masterGain);
const snareGain = context.createGain().connect(masterGain);
const tom1Gain = context.createGain().connect(masterGain);
const tom2Gain = context.createGain().connect(masterGain);
const hhOpenGain = context.createGain().connect(masterGain);
const hhClosedGain = context.createGain().connect(masterGain);
const aux1Gain = context.createGain().connect(masterGain);
const aux2Gain = context.createGain().connect(masterGain);
// masterGain.connect(context.destination)


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Drum Sounds test environment</h1>
        </header>
        <div>
          <button onClick={() => kick(context, kickGain)}>kick</button>
          <button onClick={() => snare(context, snareGain)}>snare</button>
          <button onClick={() => tom1(context, tom1Gain)}>tom1</button>
          <button onClick={() => tom2(context, tom2Gain)}>tom2</button>
          <button onClick={() => hhopen(context, hhOpenGain)}>hhopen</button>
          <button onClick={() => hhclosed(context, hhClosedGain)}>hhclosed</button>
          <button onClick={() => aux1(context, aux1Gain)}>aux1</button>
          <button onClick={() => aux2(context, aux2Gain)}>aux2</button>
        </div>
      </div>
    );
  }
}

export default App;
