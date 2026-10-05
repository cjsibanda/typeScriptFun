//--------------------------------------------------------------------------------
// BILTONG STORAGE COMPANY (BSC) MANAGEMENT SYSTEM - TypeScript
// Meat Processing & Cold Chain
//---------------------------------------------------------------------------------

/***********************************************************************************
* 1. Unknown - a type safe alternative to 'any'
************************************************************************************/
function inspectRecord(value: unknown): string {
  if (typeof value === "string") return `Test record: ${value}`;
  if (typeof value === "number") return `Numeric record: ${value}`;
  return "Unkown record type";
}

/***********************************************************************************
* 2. Type Assertion - Overrides Typescripts inferred type
************************************************************************************/
interface Cattle {
  tag: string;
  breed: string;
  weightKg: number;
  district: string;
}

function getTag(value: unknown): string {
  const cattle = value as Cattle;
  return cattle.tag;
}

/**********************************************************************************
* 3. Type Guard - Runtime check that gurantees the type in some scope
***********************************************************************************/
function isCattle(value: unknown): value is Cattle {
  if (typeof value !== "object" || value === null) return false;

  const record = value as Record<string, unknown>;

  return (
    typeof record.tag === "string" &&
    typeof record.breed === "string" &&
    typeof record.weightKg === "number" &&
    typeof record.district === "string"
  );
}

function describeCattle(value: unknown): string {
  return isCattle(value)
    ? `${value.tag}: ${value.breed}, ${value.weightKg}kg from ${value.district}`
    : "Invalid cattle record";
}

/*********************************************************************************
* 4. intanceof - Checks an object's constructor class
**********************************************************************************/
abstract class BSCFacility {
  constructor(public name: string, public town: string) {}
}

class SlaughterHouse extends BSCFacility {
  constructor(
    name: string,
    town: string,
    public capacity: number
  ) {
    super(name, town);
  }
} 

class MombeStore extends BSCFacility {
  constructor(
    name: string,
    town: string,
    public capacityTonnes: number
  ) {
    super(name, town);
  }
}

function identifyFacility(facility: BSCFacility): string {
  if (facility instanceof SlaughterHouse) {
    return `Slaughter House: ${facility.name}, capacity ${facility.capacity}`;
  }

  if (facility instanceof MombeStore) {
    return `Mombe Store: ${facility.name}, ${facility.capacityTonnes} tonnes`;
  }

  return "Unkown Facility";
}

/**********************************************************************************
* 5. Optional Chaining & Nullish Coalescing 
* Safely reads deeply nested properties
* Fallback for null or undefined
***********************************************************************************/
interface Supplier {
  name: string;
  district: string;
  contact?: {
    phone?: string;
  };
}

function getSupplierPhone(supplier: Supplier): string {
  return supplier.contact?.phone ?? "No phone number supplied";
}

interface ColdRoom {
  room: string;
  temperature?: number;
}

function getTemperature(room: ColdRoom): number {
  return room.temperature ?? -18;
}


/**********************************************************************************
* ***************** Trust But Verify ********************************************** 
***********************************************************************************/

console.log("--------> BSC Typescript Tests <------------------");

// 1. Testing Unknown 
console.log("1. testing unknown", inspectRecord("BSC Bulawayo"));

// 2. Testing Type Assertion
const mombe1: unknown = {
  tag: "MOMBE-MAS-101",
  breed: "Nkomo",
  weightKg: 475,
  district: "Masvingo"
};

console.log("2. Mombe 1 Tag:", getTag(mombe1));

// 3. testing Type Guard
console.log("3. Testing Type Guard:", describeCattle(mombe1));

// 4. Testing instanceof
const slaughterHouse = new SlaughterHouse(
  "BSC Bulawyo SlaughterHouse",
  "Bulawayo",
  1200
);

const mombeStore = new MombeStore(
  "BSC Vic Falls Mombe Store",
  "Victoria Falls",
  800
);

console.log("4. Testing instanceof- Slaughter House:", identifyFacility(slaughterHouse));
console.log("4. Testing instanceof - Mombe Store:", identifyFacility(mombeStore));

// 5. Testing Optional Chaining & Nullish Coalescing
const supplier: Supplier = {
  name: "Harare Mombe Estate",
  district: "Harare"
};

console.log("5. Supplier Phone number is:", getSupplierPhone(supplier));
console.log("5. Cold Room Temperature is", getTemperature({ room: "CR-HRE-01"}));


