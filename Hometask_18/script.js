class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    withdrawPersonInfo() {
        console.log(`Person info:
            Name: ${this.name},
            Age: ${this.age};`);
    }
}


class Car {
    constructor(brand, model, productionYear, licensePlate) {
        this.brand = brand;
        this.model = model;
        this.productionYear = productionYear;
        this.licensePlate = licensePlate;
    }

    setOwner(ownerToSet) {
        if (ownerToSet.age >= 18) {
            this.owner = ownerToSet;
            console.log('Owner was set successfully.');
        } else {
            console.log('Cannot set owner, the person is underage.');
        }
    }

    withdrawCarInfo() {
        let toWithdraw = `Car info:
            Brand: ${this.brand},
            Model: ${this.model},
            Year of production: ${this.productionYear},
            License Plate: ${this.licensePlate},
            `;

        if (typeof this.owner == "undefined") {
            toWithdraw += `No owner;`;
        } else {
            toWithdraw += `Owner info:
                Name: ${this.owner.name},
                Age: ${this.owner.age};`;
        }

        console.log(toWithdraw);
    }
}


console.log('Test 1');
const person_1 = new Person('Oleg', 23);
person_1.withdrawPersonInfo();
const car_1 = new Car('Audi', 'R8', '2023', 'qw1234rt');
car_1.setOwner(person_1);
car_1.withdrawCarInfo();

console.log(`
Test 2`);
const person_2 = new Person('Gosha', 14);
person_2.withdrawPersonInfo();
const car_2 = new Car('Nissan', 'GTR', '2015', 'as5678df');
car_2.setOwner(person_2);
car_2.withdrawCarInfo();

console.log(`
Test 3`);
const person_3 = new Person('Maria', 34);
person_3.withdrawPersonInfo();
const car_3 = new Car('Nissan', 'GTR', '2012', '0054238');
car_3.setOwner(person_3);
car_3.withdrawCarInfo();
