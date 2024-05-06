{
// instanceof type Guard

class Animal {
    name: string ;
    species: string ;
    constructor(name: string , species: string ){
        this.name= name ;
        this.species = species;
    }

    makeSound(){
        console.log(`animal sound is something`);
    }

}

class Dog extends Animal{
    constructor(name:string, species: string){
        super(name, species)
    }
    makeBark(){
        console.log(`I am dog my sound is ghew ghew`);
    }
}

class Cat extends Animal{
    constructor(name: string, species: string){
        super(name, species)
    }
    makeMeaw(){
        console.log(`I am cat my sound is meaw meaw`);
    }
}


const isCat=(animal: Animal): animal is Cat=>{
    return animal instanceof Cat;
}

const isDog=(animal: Animal): animal is Dog=>{
    return animal instanceof Dog;
}


const getAnimalSound=(animal: Animal)=>{
    if(isCat(animal)){
        animal.makeMeaw()
    }
    else if(isDog(animal)){
        animal.makeBark()
    }
    else{
        animal.makeSound()
    }
}

const cat = new Cat('Cat Bhai', "Cat")
const dog = new Dog('Dog Bhai', "Dog")

getAnimalSound(dog)


// 

}