class Key {
    private signature: number;
    constructor() {
        this.signature = Math.floor(Math.random() * 1000000);
    }
    getSignature() {
        return this.signature;
    }
}

class Person {
    private key: Key;
    constructor(key: Key) {
        this.key = key;
    }
     getKey() {
        return this.key;
}
}

class House {
    door: boolean;
    key: Key;
    tenants: Person[];

    constructor(key: Key) {
        this.door = false;
        this.key = key;
        this.tenants = [];
    }
    comeIn(person: Person) {
        if (this.door) {
            return this.tenants.push(person);
        }
}
}

class MyHouse extends House {
    openDoor(key: Key) {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log("Door is open");
        } else {
            console.log("Door is closed");
        }
    }
}


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};