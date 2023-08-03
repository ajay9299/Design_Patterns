export class Person {
  firstName: string;
  lastName: string;
  age: number;
  address: string;

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    address: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
  }

  displayInfo() {
    console.log(
      `${this.firstName} ${this.lastName}, Age: ${this.age}, Address: ${this.address}`
    );
  }
}
