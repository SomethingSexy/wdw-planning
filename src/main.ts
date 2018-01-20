export class SimpleClass {
  public add(a: number, b: number): number {
    const test = { };
    const test2 = {
      ...test,
      balls: 1
    };

    console.log(test2); // tslint:disable-line
    return a + b;
  }
}

const simpleClass: SimpleClass = new SimpleClass();
console.log(simpleClass.add(2, 3)); // tslint:disable-line
