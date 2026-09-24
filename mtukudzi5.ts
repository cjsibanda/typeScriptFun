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

class Springbok extends SafariAnimal {
  makeCall(): string {
    return "Grunts and leaps through the air!";
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

/*************************************************************************************
* 5. Generic Constraints & Property Lookup (extends keyof)
* It makes sure we can safely extract a property from a safari entity
* ... without risking accessing an undefined key.
*************************************************************************************/
function getEntityProperty<T, K extends keyof T>(entity: T, key: K): T[K] {
  return entity[key];
}

/*********************************************************************************
* 6. Thorough/exhaustive Checking & Strict Type Guards
* To make sure that every possible animal classification is handled in switch
* If a new category is added to the union later, TS throws a compile error
***********************************************************************************/
type AnimalDiet = "carnivore" | "herbivore" | "omnivore";

function getFeedingSchedule(diet: AnimalDiet): string {
  switch (diet) {
    case "carnivore":
      return "Feed twice daily - raw meat.";
    case "herbivore":
      return "Continuous grazing access until 08:00.";
    case "omnivore":
      return "Root/fruit and protein supplement.";
    default:
      //If diet is exhaustive/thorough, 'diet' is narrowed to type never here
      const _exhaustiveCheck: never = diet;
      return _exhaustiveCheck;
  }
}

/***********************************************************************************
* 7. Going over Template Literal types
* These are strongly typed strings formatted formmatted specifically
* ....for safari  tracking IDs and operational locations.
***********************************************************************************/
type Sector =  "Highlands" | "Borrowdale" | "Burnside" | "Riverside";
type ZoneCode = `ZONE-${Sector}`; //Evaluates to "Zone-Higlands" | "ZONE-Borrowdale" | ..,

type RangerID = `RNR-${number}`; //e.g., "RNR-101"

interface RangerStation {
  id: RangerID;
  location: ZoneCode;
}


/********************************************************************************
* 8 Utility Types (Partial, Pick, Omit)
* Modeling partial updates, lean summaries, and sanitized records.
********************************************************************************/
interface SafariVehicle {
  registrationNumber: string;
  model: string;
  capacity: number;
  lastServicedDate: string;
  inService: boolean;
}

//Partial<T>: All fields optional for update ops
type VehicleUpdatePayload = Partial<SafariVehicle>;

//Pick<T, K>: Extracts only specific properties for summary 
type VehiclePublicSummary = Pick<SafariVehicle, "model" | "capacity">;

//Omit<T. K>: Strips out sensitive or internal properties
type ServiceLogView = Omit<SafariVehicle, "inService">;

/************************************************************************
* 9. Enums (for Constant Maps)
* Defining the fixed operational constants park entry gates/regions
************************************************************************/
enum ParkGate {
  HwangeMain = "Main Gate - Hwange",
  Mufakose = "Mufakose Camp",
  Kuwadzana = "Kuwadzana Camp",
  MabvukuMain = "Kezi Gate - Mabvuku"
}

enum BookingTier {
  Standard = "Standard Game View",
  VIP = "Luxury Photographic Safari",
  Private = "Chartered Exclusive"
}


//------------------------------------------------------------------
// *********************** Trust But Verify ************************
//------------------------------------------------------------------
console.log("=== SAFARI PARK VERIFICATION ===");

//1. Testing Generics & Tuples
const group = wrapInTourGroup("Guide Sibanda", {guestName: "CJ", passID: 504});
console.log("1. Tour Group Tuple:", group);

//2. Testing Polymorphism
const safariPark: SafariAnimal[] = [
  new Lion("Simba", "Hwange Plains"),
  new Elephant("Jumbo", "Kruger Park"),
  new Springbok("Xholiso", "Matopos Hills")
];
safariPark.forEach(animal => {
  console.log(`2. ${animal.name}'s call`, animal.makeCall());
});

//3. Testing Discriminated Unions
const ticket: SafariBooking = { kind: "gameDrive", durationHours: 5};
console.log("3. Calculated Booking Cost ($):", getBookingCost(ticket));

// 4. Testing Readonly Utility Type
const currentTour: ReadonlyTour = { camp: "Camp Mbare", maxGuests: 6 };
// currentTour.maxGuests = 10; // --> Error: Cannot assign because it is read-only
console.log("4. Readonly Tour Camp:", currentTour.camp);

// 5. Testing Generic Constraints (getEntityProperty)
const vehicle: SafariVehicle = {
  registrationNumber: "ZW-ABC-1468",
  model: "Toyota Land Cruiser",
  capacity: 9,
  lastServicedDate: "2026-08-15",
  inService: true
};

const modelName = getEntityProperty(vehicle, "model");
//const invalidKey = getEntityProperty(vehicle, "color");
//^^^Error: Argument of type '"color"' is not assignable to keyof SafariVehicle
console.log("5. Extracted Vehicle Model:", modelName);

// 6. Testing Exhaustiveness Checking (never type)
const lionDiet: AnimalDiet = "carnivore";
console.log("6. Feeding Schedule:", getFeedingSchedule(lionDiet));

// 7. Testing Template Literal Types
const station: RangerStation = {
  id: "RNR-505",
  location: "ZONE-Riverside"
  //location: "ZONE-Makokoba" 
  // ^^^ throws error: '"ZONE-Makokoba"' is not assignable to type 'ZoneCode'
};
console.log(`7. Ranger Station registered: ${station.id} in ${station.location}`);

//8. Testing Utility Types (Partial, Pick, Omit)
const updatePatch: VehicleUpdatePayload = {
  inService: false //Only supplying the field that changed
};

const publicInfo: VehiclePublicSummary = {
  model: vehicle.model,
  capacity: vehicle.capacity
};

console.log("8. Vehicle Patch Payload:", updatePatch);
console.log("8. Public summary Card:", publicInfo);

//9. Testing Enums
const chosenGate: ParkGate = ParkGate.HwangeMain;
const selectedTier: BookingTier.VIP;
console.log(`9. Gate Entry Point: ${chosenGate} | Tier: ${selectedTier}`);



  






