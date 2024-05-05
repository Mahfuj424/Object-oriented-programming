"use strict";
{
    // oop --> constructor
    class Animal {
        constructor(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        makeSound() {
            console.log(`the ${this.name} says ${this.sound}`);
        }
    }
    const dog = new Animal("english dogy", "dog", "ghew ghew");
    const cat = new Animal("bangladeshi cat", "cat", "meaw meaw");
    cat.makeSound();
}
