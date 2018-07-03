import React, { Component } from 'react';
import './App.css';

import { kick, snare, hhopen, hhclosed, tom1, tom2, aux1, aux2 } from './sounds'

// Setup audio stuff
const context = new AudioContext();
// Create and setup gain nodes for each channel
// Pass node into their respective function
const masterGain = context.createGain().connect(context.destination);
masterGain.value = 1;
// const kickGain = context.createGain().connect(masterGain);
// const snareGain = context.createGain().connect(masterGain);
// const tom1Gain = context.createGain().connect(masterGain);
// const tom2Gain = context.createGain().connect(masterGain);
// const hhOpenGain = context.createGain().connect(masterGain);
// const hhClosedGain = context.createGain().connect(masterGain);
// const aux1Gain = context.createGain().connect(masterGain);
// const aux2Gain = context.createGain().connect(masterGain);

// Setup Delay
const delay = context.createDelay(3);
const delayInputGain = context.createGain();
const delayFeedback = context.createGain();
delayFeedback.gain.value = 0.4;
delayFeedback.connect(delay);
delayInputGain.connect(delay);
delay.connect(masterGain);
delay.connect(delayFeedback);
delayInputGain.value = 0.8;
delay.delayTime.value = 0.2;
console.log(delay);


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Drum Sounds test environment</h1>
        </header>
        <div>
          <button onClick={() => kick(context, masterGain)}>kick</button>
          <button onClick={() => snare(context, masterGain)}>snare</button>
          <button onClick={() => tom1(context, masterGain)}>tom1</button>
          <button onClick={() => tom2(context, masterGain)}>tom2</button>
          <button onClick={() => hhopen(context, masterGain)}>hhopen</button>
          <button onClick={() => hhclosed(context, masterGain, delayInputGain)}>hhclosed</button>
          <button onClick={() => aux1(context, masterGain)}>aux1</button>
          <button onClick={() => aux2(context, masterGain)}>aux2</button>
        </div>
      </div>
    );
  }
}

export default App;
