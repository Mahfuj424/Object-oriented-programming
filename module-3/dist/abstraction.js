"use strict";
{
    //   real implementation
    class Car {
        startEngine() {
            console.log(`I am starting the engine`);
        }
        stopEngine() {
            console.log(`I am stoping the engine`);
        }
        move() {
            console.log(`I am moving the car`);
        }
        test() {
            console.log(`testing purpose`);
        }
    }
    const toyotaCar = new Car();
    toyotaCar.startEngine();
    //   abstraction
    class Car2 {
    }
    class ToyotaCar extends Car2 {
        startEngine() {
            console.log(`I am starting the engine`);
        }
        stopEngine() {
            console.log(`I am stoping the engine`);
        }
        move() {
            console.log(`I am moving the car`);
        }
        test() {
            console.log(`testing purpose`);
        }
    }
    //
}
