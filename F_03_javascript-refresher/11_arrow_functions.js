// Concise single-line arrow function with implicit return
const greetCommander = name => "Hail, Commander " + name;

// Single parameter with explicit square calculation
const calculatePowerLevel = n => n * n;

// Multi-line arrow function with no parameters
const SoundWaveTransmission = () => {
  console.log("Soundwave superior, Autobots inferior!");
};

console.log(greetCommander("Perceptor"));
console.log("Core Energy Output:", calculatePowerLevel(9));
SoundWaveTransmission();