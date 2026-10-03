// 1. Block Scope Test
if (true) {
  let secretAutobotCode = "ALPHA-TRION-99";
  console.log("Inside Block:", secretAutobotCode);
}

try {
  // Accessing block variable outside throws ReferenceError
  console.log(secretAutobotCode);
} catch (err) {
  console.log("Scope Error Caught: secretAutobotCode is not defined in outer scope.");
}

// 2. Closure Demonstration
function createEnergonVault() {
  let reserveCount = 0; // Private state variable
  return function extractCube() {
    reserveCount++;
    return reserveCount;
  };
}

const vaultA = createEnergonVault();
const vaultB = createEnergonVault();

console.log("Vault A Extraction #1:", vaultA()); // 1
console.log("Vault A Extraction #2:", vaultA()); // 2
console.log("Vault B Extraction #1:", vaultB()); // 1 (Independent state instance)