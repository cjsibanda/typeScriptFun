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

