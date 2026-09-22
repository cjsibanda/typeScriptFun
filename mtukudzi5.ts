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


/********************************************************************
* 3. Discriminated Unions
********************************************************************/
interface GameDrive {
  kind: "gameDrive";
  durationHours: number;
}

interface NightSafari {
  kind: "nightSafari";
  spotlightEquipped: boolean;
}

type SafariBooking = GameDrive | NightSafari;


function getBookingCost(booking: SafariBooking): number {
  switch (booking.kind) {
    case "gameDrive":
      return booking.durationHours * 100;
    case "nightSafari":
      return booking.spotlightEquipped ? 250 : 200;
  }
}

/****************************************************************************
* 4. Utility Types (Readonly)
*****************************************************************************/
interface TourConfig {
  camp: string;
  maxGuests: number;
}

type ReadonlyTour = Readonly<TourConfig>;





//------------------------------------------------------------------
// *********************** Trust But Verify ************************
//------------------------------------------------------------------
console.log("=== SAFARI PARK VERIFICATION ===");

//1. Testing Generics & Tuples
const group = wrapInTourGroup("Guide Sibanda", {guestName: "CJ", passID: 404});
console.log("1. Tour Group Tuple:", group);

//2. Testing Polymorphism
const safariPark: SafariAnimal[] = [
  new Lion("Simba", "Hwange Plains"),
  new Elephant("Jumbo", "Kruger Park")
];
safariPark.forEach(animal => {
  console.log(`2. ${animal.name}'s call`, animal.makeCall());
});

//3. Testing Discriminated Unions
const ticket: SafariBooking = { kind: "gameDrive", durationHours: 4};
console.log("3. Calculated Booking Cost ($):", getBookingCost(ticket));

// 4. Testing Readonly Utility Type
const currentTour: ReadonlyTour = { camp: "Camp Nomadic", maxGuests: 6 };
// currentTour.maxGuests = 10; // --> Error: Cannot assign because it is read-only
console.log("4. Readonly Tour Camp:", currentTour.camp);








