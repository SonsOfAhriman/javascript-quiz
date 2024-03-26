class Dog {
    constructor(name) {
        this.username = name;
        this.wagTail = () => {
            return "Wagging Tail"
        }
    }

    bark() {
        return "woof"
    }
}

const dog1 = new Dog("Max");
const dog2 = new Dog("Spot");

console.log(dog1.wagTail() === dog2.wagTail());
console.log(dog1.wagTail === dog2.wagTail);
console.log(dog1.bark === dog2.bark);

console.log(Object.getPrototypeOf(dog1) === Object.getPrototypeOf(dog2));

console.log(dog1.constructor === dog2.constructor);
