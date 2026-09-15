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

//----------------------------------------------------------
// **************** Trust but verify -----------------------
//----------------------------------------------------------

//1. Testing Namespaces
console.log("--- 1. Testing Namespaces ---");
console.log("1. Accessing exported constant:", MyNamespace.myValue);
console.log("1. Calling namespace function:", MyNamespace.greet("Sibanda"));
console.log("1. Calling function utilizing private/internal data:", MyNamespace.revealSecret());
//Testing the Geometry namespace functions
console.log("--- 2. Testing Geometry Namespace ---");
console.log("2. Area of Rectangle (10 x 5):", Geometry.areaOfRectangle(10, 5));
console.log("2. Area of Circle (radius 7):", Geometry.areaOfCircle(7).toFixed(2));

