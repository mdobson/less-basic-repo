var personsName = "Matt";

function helloer(nameOfPerson) {
  console.log(`Hello, ${nameOfPerson}`);
}

helloer(personsName);

class Person {
  constructor(personsName) {
    this.name = personsName;
  }

  greet() {
    console.log(`Hello, ${this.name}`);
  }
}

const b = new Person("Matt");
b.greet();
