{
  // abstraction --> 1.interface, 2.abstrac

  //   idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  //   real implementation
  class Car implements Vehicle1 {
    startEngine(): void {
      console.log(`I am starting the engine`);
    }
    stopEngine(): void {
      console.log(`I am stoping the engine`);
    }
    move(): void {
      console.log(`I am moving the car`);
    }
    test(): void {
      console.log(`testing purpose`);
    }
  }

  const toyotaCar = new Car();
  toyotaCar.startEngine();

  //   abstraction
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
  }

  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log(`I am starting the engine`);
    }
    stopEngine(): void {
      console.log(`I am stoping the engine`);
    }
    move(): void {
      console.log(`I am moving the car`);
    }
    test(): void {
      console.log(`testing purpose`);
    }
  }

  //
}
