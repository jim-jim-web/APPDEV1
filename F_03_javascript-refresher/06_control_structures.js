let energonPercentage = 85;

// If else
if (energonPercentage >= 90) {
  console.log("Status: Optimal Reserve (Rank A)");
} else if (energonPercentage >= 80) {
  console.log("Status: Combat Ready (Rank B)");
} else if (energonPercentage >= 70) {
  console.log("Status: Moderate Reserve (Rank C)");
} else {
  console.log("Status: Critical Reserve (Rank F)");
}

// For Loop
for (let cube = 1; cube <= 5; cube++) {
  console.log(`Charging Energon Cube #${cube}... Complete!`);
}

// While Loop
let transformCount = 0;
while (transformCount < 3) {
  console.log("Transform and Roll Out!");
  transformCount++;
}