//Ternary Operator
const combatScore = 88;
const battleStatus = combatScore >= 70 ? "Deployment Approved" : "Needs Repairs";
console.log("Status:", battleStatus);

//Optional Chaining ?.
const transformerData = {
  name: "Jetfire",
  specs: { speed: "Mach 3" }
};
console.log("Base Location:", transformerData.location?.city); // undefined without throwing error

//Nullish Coalescing ?? vs Logical OR ||
const energonReserve = 0;
console.log("Reserve via ||:", energonReserve || 100); // 100 (Overrides 0 because 0 is falsy)
console.log("Reserve via ??:", energonReserve ?? 100); // 0 (Preserves valid 0 value)