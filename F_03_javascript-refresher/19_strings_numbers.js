// String Manipulation
const rawLog = "  Megatron Decepticon  ";
const cleanLog = rawLog.trim();
const [warriorName, faction] = cleanLog.split(" ");

console.log("Clean Name (Uppercase):", warriorName.toUpperCase());
console.log("Includes 'Decepticon':", cleanLog.includes("Decepticon"));
console.log("Sub-string slice:", cleanLog.slice(0, 8));
console.log(`Full Record: ${warriorName} fights for the ${faction}`);

// Number Formatting
console.log("Parsed Capacity:", parseInt("500 Cubes"));
console.log("Formatted Credit Value:", (129.8765).toFixed(2));

const invalidCalculation = "Cybertron" / 5;
console.log("Invalid Math Result:", invalidCalculation);
console.log("Is Result NaN?:", Number.isNaN(invalidCalculation));