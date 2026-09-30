// Array Spread
const initialAutobots = ["Jazz", "Wheeljack"];
const fullAutobotRoster = [...initialAutobots, "Mirage", "Hound"];
console.log("Full Roster:", fullAutobotRoster);

// Object Spread
const baseProfile = { name: "Starscream", rank: "Air Commander" };
const updatedProfile = { ...baseProfile, faction: "Decepticon", status: "Plotting Treason" };
console.log("Updated Profile:", updatedProfile);

// Rest Operator with .reduce()
function calculateTotalEnergon(...cubeAmounts) {
  return cubeAmounts.reduce((total, amount) => total + amount, 0);
}

console.log("Total Energon Collected:", calculateTotalEnergon(15, 25, 40, 10)); // 90