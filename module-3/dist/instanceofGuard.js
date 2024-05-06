"use strict";
{
    // instanceof type Guard
    class Animal {
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log(`animal sound is something`);
        }
    }
    class Dog extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeBark() {
            console.log(`I am dog my sound is ghew ghew`);
        }
    }
    class Cat extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeMeaw() {
            console.log(`I am cat my sound is meaw meaw`);
        }
    }
    const isCat = (animal) => {
        return animal instanceof Cat;
    };
    const isDog = (animal) => {
        return animal instanceof Dog;
    };
    const getAnimalSound = (animal) => {
        if (isCat(animal)) {
            animal.makeMeaw();
        }
        else if (isDog(animal)) {
            animal.makeBark();
        }
        else {
            animal.makeSound();
        }
    };
    const cat = new Cat('Cat Bhai', "Cat");
    const dog = new Dog('Dog Bhai', "Dog");
    getAnimalSound(dog);
    // 
}
