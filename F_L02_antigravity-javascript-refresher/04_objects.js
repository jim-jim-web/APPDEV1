const transformerUnit = {
  name: "Optimus Prime",
  faction: "Autobot",
  rank: "Supreme Commander",
  introduce: function () {
    console.log(`I am ${this.name}, ${this.rank} of the ${this.faction}s.`);
  }
};

// New property
transformerUnit.primaryWeapon = "Ion Blaster";

transformerUnit.introduce();
console.log("Equipped Weapon:", transformerUnit.primaryWeapon);