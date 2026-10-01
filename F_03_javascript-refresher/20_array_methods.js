const cybertronianRoster = [
  { name: "Optimus Prime", combatRating: 95 },
  { name: "Bumblebee", combatRating: 82 },
  { name: "Cliffjumper", combatRating: 45 }
];

// .filter()
const operationalUnits = cybertronianRoster.filter(bot => bot.combatRating >= 60);
console.log("Operational Units:", operationalUnits.map(b => b.name));

// .find()
const bee = cybertronianRoster.find(bot => bot.name === "Bumblebee");
console.log("Found Unit:", bee);

// .some() and .every()
console.log("Has Damaged Units:", cybertronianRoster.some(bot => bot.combatRating < 50));
console.log("All Units Operational:", cybertronianRoster.every(bot => bot.combatRating >= 60));

// .sort() descending
const sortedRoster = [...cybertronianRoster].sort((a, b) => b.combatRating - a.combatRating);
console.log("Sorted Leaderboard:", sortedRoster.map(b => `${b.name} (${b.combatRating})`));