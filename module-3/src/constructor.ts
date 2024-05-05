{
  // constructor

  class Animal {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    makeSound() {
      console.log(`the ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("english dogy", "dog", "ghew ghew");
  const cat = new Animal("bangladeshi cat", "cat", "meaw meaw");

  cat.makeSound();
}
