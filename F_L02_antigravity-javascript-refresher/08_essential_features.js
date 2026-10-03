// Array Mapping
const cybertronWeapons = ["Ion Blaster", "Plasma Cannon", "Energon Shield"];
cybertronWeapons.map(weapon => console.log("Equipped Weapon:", weapon));

// Object Destructuring
const warrior = { name: "Arcee", age: 3000000, faction: "Autobot" };
const { name, age } = warrior;
console.log(`Warrior Name: ${name}, Operational Age: ${age}`);

// Array Spread Operator
const squadAlpha = ["Optimus", "Bumblebee"];
const fullSquad = [...squadAlpha, "Jazz", "Sideswipe"];
console.log("Full Combat Squad:", fullSquad);