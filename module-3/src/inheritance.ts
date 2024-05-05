{
  // oop --> inheritance


class Parent{
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numberOfHours: number){
        console.log(`${this.name} will sleep ${numberOfHours}`);
    }
}



  class Student extends Parent {

    constructor(name: string, age: number, address: string) {
        // super keyword work at push your parent class
      super(name, age, address)
    }
  }

  const student1 = new Student('mahfuj', 20, 'sunamganj')
  student1



  class Teacher extends Parent {
    
    designation: string ;

    constructor(name: string, age: number, address: string, designation: string ) {
      super(name, age, address)
      this.designation= designation;
    }

    takeClass(numberOfHours: number){
        console.log(`${this.name} take class ${numberOfHours}`);
    }

    
  }

  const teacher = new Teacher('mahfuj', 20, 'sunamganj', 'profesor')
  teacher
  



  //
}
