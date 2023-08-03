import { Person } from "./person";

class PersonBuilder {
  private firstName!: string;
  private lastName!: string;
  private age!: number;
  private address!: string;

  setFirstName(firstName: string): PersonBuilder {
    this.firstName = firstName;
    return this;
  }

  setLastName(lastName: string): PersonBuilder {
    this.lastName = lastName;
    return this;
  }

  setAge(age: number): PersonBuilder {
    this.age = age;
    return this;
  }

  setAddress(address: string): PersonBuilder {
    this.address = address;
    return this;
  }

  build(): Person {
    return new Person(this.firstName, this.lastName, this.age, this.address);
  }
}

const person = new PersonBuilder()
  .setFirstName("John")
  .setLastName("Doe")
  .setAge(30)
  .setAddress("123 Main St")
  .build();

person.displayInfo(); // Output: John Doe, Age: 30, Address: 123 Main St
