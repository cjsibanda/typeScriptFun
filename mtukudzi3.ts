/*******************************************************************************
* ---------------------- MyNamespace (Namespaces) ------------------------------
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

//----------------------------------------------------------
// **************** Trust but verify -----------------------
//----------------------------------------------------------

//1. Testing Namespaces
console.log("--- 1. Testing Namespaces ---");
console.log("1. Accessing exported constant:", MyNamespace.myValue);
console.log("1. Calling namespace function:", MyNamespace.greet("Sibanda"));
console.log("1. Calling function utilizing private/internal data:", MyNamespace.revealSecret());
