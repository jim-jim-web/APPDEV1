// Type Coercion
console.log('100 == "100":', 100 == "100");
console.log('100 === "100":', 100 === "100");

let matrixBearer;
let emptyEnergonVault = null;
console.log("Unassigned Variable:", matrixBearer);
console.log("Explicit Null State:", emptyEnergonVault);

//Regular vs arrow `this`
const baseCommand = {
  commander: "Ultra Magnus",
  regularReport: function () {
    console.log("Regular Method Commander:", this.commander);
  },
  arrowReport: () => {
    console.log("Arrow Method Commander:", this.commander);
  }
};

baseCommand.regularReport();
baseCommand.arrowReport();

// Reference vs Spread Copying
const originalVault = ["Energon Cube 1", "Energon Cube 2"];
const referenceCopy = originalVault;
referenceCopy.push("Energon Cube 3");

console.log("Original Vault after reference push:", originalVault); // Mutated!

const spreadCopy = [...originalVault];
spreadCopy.push("Energon Cube 4");
console.log("Original Vault after spread copy push:", originalVault); // Unchanged
console.log("Spread Copy Array:", spreadCopy);