let activeCommander = "Optimus Prime";
const homePlanet = "Cybertron";

activeCommander = "Rodimus Prime";
console.log("New Commander:", activeCommander);

try {
  // homePlanet = "Earth"; Throws TypeError: Assignment to constant variable.
} catch (err) {
  console.log("Const re-assignment caught:", err.message);
}

// Demonstrating old var scoping vs let block scoping
var outpostSector = "Sector 7";
console.log("Outpost Location:", outpostSector);