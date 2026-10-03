// Base Class
class Transformer {
  constructor(name, faction) {
    this.name = name;
    this.faction = faction;
  }

  identify() {
    console.log(`Unit ${this.name} belongs to the ${this.faction} faction.`);
  }
}

// Derived Class inheriting from Transformer
class AutobotWarrior extends Transformer {
  constructor(name, altMode) {
    super(name, "Autobot");
    this.altMode = altMode;
  }

  transform() {
    console.log(`${this.name} converts into a ${this.altMode}!`);
  }
}

const bumblebee = new AutobotWarrior("Bumblebee", "Yellow Camaro");
bumblebee.identify();
bumblebee.transform();