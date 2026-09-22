//----------------------------------------------------------------------
// SIBANDA SAFARI PARK MANAGEMENT SYSTEM - typescript
//----------------------------------------------------------------------

/************************************************************************
* 1. Generics & Tuples
*************************************************************************/
function wrapInTourGroup<T>(leader: string, detail: T): [string, T] {
  return [leader, detail];
}

/************************************************************************
* 2. Abstract Classes & Polymorphism
*************************************************************************/
abstract class SafariAnimal {
  constructor(public name: string, protected territory: string) {}

  abstract makeCall(): string;
}


class Lion extends SafariAnimal {
  makeCall(): string {
      return "Roars loudly across Hwange!";
    }
  }

class Elephant extends SafariAnimal {
    makeCall(): string {
      return "Trumpets and rumbles across the Savannah!";
    }
  }




//------------------------------------------------------------------
// *********************** Trust But Verify ************************
//------------------------------------------------------------------
console.log("=== SAFARI PARK VERIFICATION ===");
