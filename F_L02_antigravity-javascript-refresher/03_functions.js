// Standard Function Declaration
function greetAutobot(name) {
  return `Greetings, Autobot ${name}. Welcome to Cybertron!`;
}

// Arrow Function
const calculateEnergonSquare = (cubes) => cubes * cubes;

// Returning Object
function analyzeBattleSpecs(attackPower, defensePower) {
  return {
    totalCombatScore: attackPower + defensePower,
    powerProduct: attackPower * defensePower
  };
}

console.log(greetAutobot("Ironhide"));
console.log("Energon Grid Capacity:", calculateEnergonSquare(6));
console.log("Battle Analytics:", analyzeBattleSpecs(80, 95));