let autobotRoster = ["Optimus", "Bumblebee", "Ratchet"];

autobotRoster.push("Grimlock");
autobotRoster.shift();

console.log("Current Roster:");
for (const bot of autobotRoster) {
  console.log(" -", bot);
}

const formattedRoster = autobotRoster.map(bot => "Autobot Unit: " + bot);
console.log("Formatted Units:", formattedRoster);