//-------------------------------------------------------------------------
// Mtukudzi Kitchen Management System
//------------------------------------------------------------------------

//1. Generics & Tuples
function wrapInKitchenGroup<T>(leader: string, detail: T): [string, T] {
  return [leader, detail];
}

/////////////////////////////////////////////////////////////////////////////
//////////////    Trust But Verify     //////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
console.log(">>>> MTUKUDZI KITCHEN SYSTEM <<<<<<<<<<");

//.1 Testing Generics and Tuples
const group = wrapInKitchenGroup("Chef Curry", {customerName: "Victor", passID: 504});
console.log("1. Kitchen Group Tuple:", group);


