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
* 2. Type Asserion - Overrides Typescripts inferred type
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
* Type Guard - Runtime check that gurantees the type in some scope
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
