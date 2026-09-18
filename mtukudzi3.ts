/*******************************************************************************
* ---------------------- MyNamespace (1. Namespaces) ------------------------------
* Namespaces encapsulate code into logical groupings
* Namespaces help avoid global scope pollution and 
* ... organize code logically
********************************************************************************/
namespace MyNamespace {
  //Exporting a variable so it's accessile outside the namespace
  export const myValue: number = 10;
  //Export a function within the namespace
  export function greet(name: string): string {
    return `Hello, ${name}! The namespace value ${myValue}.`;
  }

  //Non-exported variable (private to the namespace)
  const secretCode: string = "ABC-123";

  export function revealSecret(): string {
    return `The secret is: ${secretCode}`;
  }
}

/***********************************************************************
* ---------------- Geometry (2. Namespaces) -------------------------------
* Demonstrating encapsulating geometric calculation functions
* inside a single namespace
************************************************************************/
namespace Geometry {
  export function areaOfRectangle(width: number, height: number): number {
    return width * height;
  }

  export function areaOfCircle(radius: number): number {
    return Math.PI * radius * radius;
  }
}

/*************************************************************************
* -------------------------- Utility Types (3. Readonly) ------------
* Using TypeScript's built-in Readonly<T> utitlity type
* to make all properties of an existing type immutable
* at compile time, preventing accidental mutations.
**************************************************************************/
type Point = {
 x: number;
 y: number; 
};

type ReadonlyPoint = Readonly<Point>;

function modifyReadPoint(point: ReadonlyPoint): void {
  //If the line below is uncommented, TypeScript will throw an error
  // "Cannot assign to 'x' because it is a read-only property."
  // point.x = 50;
  console.log(`3. ReadonlyPoint value -> x: ${point.x}, y: ${point.y}`);
}


/*************************************************************
* ------------------ displayTuple (4. Tuples) -----------------
* Function accepts a tuple containing a fixed sequence of types
* (a string and a number), destructures it, and returns 
* a formated message
**************************************************************/
function displayTuple(input: [string, number]): string {
  const [label, value] = input;
  return `The value for ${label} is ${value}.`
}

/*************************************************************************
* -------------- Decorators (5. Meta-programming) ----------------
* Using Method Decorators to modify class behavior to design time.
* The @readonly decorator sets the property descriptor's writable
* flag tp false. preventing accidental or malicious method reassignments
**************************************************************************/
function readonly(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  descriptor.writable = false;
}

class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  @readonly
  greet() {
    return "Hello, " + this.greeting;
  }
}

//----------------------------------------------------------
// **************** Trust but verify -----------------------
//----------------------------------------------------------

//1. Testing Namespaces
console.log("--- 1. Testing Namespaces ---");
console.log("1. Accessing exported constant:", MyNamespace.myValue);
console.log("1. Calling namespace function:", MyNamespace.greet("Sibanda"));
console.log("1. Calling function utilizing private/internal data:", MyNamespace.revealSecret());
//2. Testing the Geometry namespace functions
console.log("--- 2. Testing Geometry Namespace ---");
console.log("2. Area of Rectangle (10 x 5):", Geometry.areaOfRectangle(10, 5));
console.log("2. Area of Circle (radius 7):", Geometry.areaOfCircle(7).toFixed(2));
//3. Testing Readonly Utility Type
modifyReadonlyPoint({x: 10, y: 20});
console.log("Start small. Ship something.");
//4. Testing Tuples
// Note: Notice values are passes as a strict tuple array `[string, number]`
console.log(displayTuple(["Age", 99])); //Expect: The value for Age is 99




