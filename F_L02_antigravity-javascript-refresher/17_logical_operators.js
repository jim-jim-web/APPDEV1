// Evaluating Truthy / Falsy values
const testValues = [0, "", "Cybertron", null, undefined, [], {}];

testValues.forEach((val) => {
  if (val) {
    console.log(val, "-> Truthy");
  } else {
    console.log(val, "-> Falsy");
  }
});

// Logical Operations
const username = "Optimus";
const accessKey = "MatrixKey123";
const canAccessMainframe = username !== "" && accessKey !== "";
console.log("Mainframe Access Granted:", canAccessMainframe);

const isAdmin = false;
const isOfficer = true;
const canCommand = isAdmin || isOfficer;
console.log("Command Authorization:", canCommand);

// Short-circuiting evaluation
console.log("" || "Default Security Protocol");
console.log(username && "Access Granted: Level 10");