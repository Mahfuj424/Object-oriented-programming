"use strict";
{
    // oop --> inheritance
    class Parent {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numberOfHours) {
            console.log(`${this.name} will sleep ${numberOfHours}`);
        }
    }
    class Student extends Parent {
        constructor(name, age, address) {
            // super keyword work at push your parent class
            super(name, age, address);
        }
    }
    const student1 = new Student('mahfuj', 20, 'sunamganj');
    student1;
    class Teacher extends Parent {
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
        takeClass(numberOfHours) {
            console.log(`${this.name} take class ${numberOfHours}`);
        }
    }
    const teacher = new Teacher('mahfuj', 20, 'sunamganj', 'profesor');
    teacher;
    //
}
