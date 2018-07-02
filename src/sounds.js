// Create and return a buffer filled with noise (aka random values)
const noiseBuffer = context => {
  let bufferSize = context.sampleRate;
  let buffer = context.createBuffer(1, bufferSize, context.sampleRate);
  let output = buffer.getChannelData(0);

  for (let i = 0; i < bufferSize; i++) {
    output[i] = Math.random() * 2 - 1;
  }

  return buffer;
};

function kick(context, buffer, time) {
  const osc = context.createOscillator();
  const gain = context.createGain();

  osc.type = 'triangle';
  osc.frequency.value = 30;
  osc.connect(gain);

  gain.connect(context.destination);
  gain.gain.value = 0;

  osc.start(context.currentTime);

  const LENGTH = 0.1;
  gain.gain.linearRampToValueAtTime(0.9, context.currentTime + 0.001);
  gain.gain.setValueCurveAtTime([0.9, 0], context.currentTime + 0.001, LENGTH);
  osc.stop(context.currentTime + LENGTH + 0.1);
  console.log('Kick!');
}

function snare(context, time) {
  const noise = context.createBufferSource();
  noise.buffer = noiseBuffer(context);
  const noiseGain = context.createGain();
  noiseGain.gain.value = 0.1;

  const osc = context.createOscillator();
  osc.frequency.value = 200;

  const gain = context.createGain();

  noise.connect(noiseGain);
  noiseGain.connect(gain);

  osc.connect(gain);

  gain.connect(context.destination);
  gain.gain.value = 0;

  noise.start(context.currentTime);
  osc.start(context.currentTime);

  const LENGTH = 0.2;
  gain.gain.linearRampToValueAtTime(0.9, context.currentTime + 0.001);
  gain.gain.setValueCurveAtTime([0.9, 0], context.currentTime + 0.001, LENGTH);

  console.log('Snare!');
}

function tom1(context, time) {
  const osc = context.createOscillator();
  const gain = context.createGain();

  osc.type = 'triangle';
  osc.frequency.value = 250;
  osc.connect(gain);

  gain.connect(context.destination);
  gain.gain.value = 0;

  osc.start(context.currentTime);

  const LENGTH = 0.1;
  gain.gain.linearRampToValueAtTime(0.9, context.currentTime + 0.001);
  gain.gain.setValueCurveAtTime([0.9, 0], context.currentTime + 0.001, LENGTH);
  osc.stop(context.currentTime + LENGTH + 0.1);
  console.log('Tom 1!');
}

function tom2(context, time) {
  const osc = context.createOscillator();
  const gain = context.createGain();

  osc.type = 'triangle';
  osc.frequency.value = 150;
  osc.connect(gain);

  gain.connect(context.destination);
  gain.gain.value = 0;

  osc.start(context.currentTime);

  const LENGTH = 0.1;
  gain.gain.linearRampToValueAtTime(0.9, context.currentTime + 0.001);
  gain.gain.setValueCurveAtTime([0.9, 0], context.currentTime + 0.001, LENGTH);
  osc.stop(context.currentTime + LENGTH + 0.1);
  console.log('Tom 2!');
}

function hhopen(context, time) {
  console.log('HH Open!');
}

function hhclosed(context, time) {
  console.log('HH Closed!');
}

function aux1(context, time) {
  console.log('Aux 1!');
}

function aux2(context, time) {
  console.log('Aux 2!');
}

export { kick, snare, tom1, tom2, hhopen, hhclosed, aux1, aux2 };
