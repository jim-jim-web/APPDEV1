// Error Handling with try / catch / throw
function distributeEnergon(cubes, bots) {
  if (bots === 0) {
    throw new Error("Cannot distribute Energon to zero Autobots!");
  }
  return cubes / bots;
}

try {
  console.log("Cubes per bot:", distributeEnergon(100, 0));
} catch (err) {
  console.log("Error caught safely:", err.message);
}

// JSON Processing
const transformerRecord = { name: "Jazz", rank: "Special Operations", active: true };
const jsonString = JSON.stringify(transformerRecord);
console.log("Serialized JSON String:", jsonString);

const parsedObject = JSON.parse(jsonString);
console.log("Parsed Object Name:", parsedObject.name);