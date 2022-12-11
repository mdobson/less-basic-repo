class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  talkShop() {
    console.log(
      `This ones a beaut. Great example of a ${this.make} ${this.model}`
    );
  }
}

var a = new Car("Jeep", "Cherokee");

a.talkShop();
