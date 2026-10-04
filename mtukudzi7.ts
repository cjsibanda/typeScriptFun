//--------------------------------------------------------------------------------
// BILTONG STORAGE COMPANY (BSC) MANAGEMENT SYSTEM - TypeScript
// Meat Processing & Cold Chain
//---------------------------------------------------------------------------------

/***********************************************************************************
* 1. Unknown
************************************************************************************/
function inspectRecord(value: unknown): string {
  if (typeof value === "string") return `Test record: ${value}`;
  if (typeof value === "number") return `Numeric record: ${value}`;
  return "Unkown record type";
}

/**********************************************************************************
* ***************** Trust But Verify ********************************************** 
***********************************************************************************/

console.log("--------> BSC Typescript Tests <------------------");

// 1. Unknown 
console.log("1. testing unknown", inspectRecord("BSC Bulawayo"));
