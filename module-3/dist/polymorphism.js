"use strict";
{
    // polymorphism --> OOP
    class Person {
        getSleep() {
            console.log(`I am sleeping for in 8 hours`);
        }
    }
    class Student extends Person {
        getSleep() {
            console.log(`I am sleeping for in 7 hours`);
        }
    }
    class Developer extends Person {
        getSleep() {
            console.log(`I am sleeping for in 6 hours`);
        }
    }
    const getSleepingHours = (param) => {
        param.getSleep();
    };
    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();
    getSleepingHours(person1);
    getSleepingHours(person2);
    getSleepingHours(person3);
    class Shape {
        getArea() {
            return 0;
        }
    }
    class Circle extends Shape {
        constructor(redius) {
            super();
            this.redius = redius;
        }
        getArea() {
            return Math.PI * this.redius * this.redius;
        }
    }
    class Reactangle extends Shape {
        constructor(height, width) {
            super();
            this.height = height;
            this.width = width;
        }
        getArea() {
            return this.height * this.width;
        }
    }
    const getShapeArea = (param) => {
        console.log(param.getArea());
    };
    const shape1 = new Shape();
    const shape2 = new Circle(10);
    const shape3 = new Reactangle(10, 20);
    getShapeArea(shape3);
    //
}
