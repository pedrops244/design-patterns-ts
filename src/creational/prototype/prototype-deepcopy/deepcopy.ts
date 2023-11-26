interface Protoype {
  clone(): Protoype;
}

export class Person implements Protoype {
  public addresses: Address[] = [];
  constructor(
    public name: string,
    public age: number,
  ) {}

  clone(): Person {
    const newObj = new Person(this.name, this.age);
    newObj.addresses = this.addresses.map((item) => item.clone());
    return newObj;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address implements Protoype {
  constructor(
    public street: string,
    public number: number,
  ) {}
  clone(): Address {
    return new Address(this.street, this.number);
  }
}

const address1 = new Address('Av brasil', 15);
const person1 = new Person('Pedro', 30);
person1.addAddress(address1);
const person2 = person1.clone();

person1.addresses[0].street = 'Qualquer coisa';

person2.name = 'Joana';
console.log(person2);
console.log(person2.addresses);

console.log(person1);
console.log(person1.addresses);
