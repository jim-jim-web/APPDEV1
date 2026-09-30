// Object Destructuring
const decepticonLeader = { name: "Megatron", powerScore: 98, role: "Tyrant" };
const { name, powerScore } = decepticonLeader;
console.log(`Decepticon Leader: ${name}, Power Rating: ${powerScore}`);

// Array Destructuring
const dinobots = ["Grimlock", "Slag", "Sludge"];
const [leader, warrior] = dinobots;
console.log(`Dinobot Leader: ${leader}, Primary Warrior: ${warrior}`);

// Parameter Destructuring
function logTransformerSpecs({ name, role }) {
  console.log(`Unit Designation: ${name} | Combat Role: ${role}`);
}

logTransformerSpecs(decepticonLeader);