

////keyof and typeof Operators
let person = {name: 'Alice', age: 28};
type Person = typeof person;
type PersonKeys = keyof Person; //"name" | "age"

/********************************************************
A function that updates a property's value in an object,
 given the object a property key, and a value.
*******************************************************/
function updateProperty<T>(obj: T, key: keyof T, value: any): T {
    obj[key] = value;
    return obj
}

//-----------------------------
//Type Unions and Intersections
//-----------------------------
type Name = { name: string };
type Age = { age: number };
type Guy = Name & Age;

//To test Unio Type
let identifier: StringOrNumber = "ID-99";
identifier = 99; //This is valid because of union

// For Testing Intersection Type
let user: Guy = {
    name: "Cj Sibanda",
    age: 99
};


//----------------------------------------------
//Type Unions & Intersections
//----------------------------------------------
type Car = {type: "car", doors: number };
type Bike = {type: "bike", hasBell: boolean };

type Vehicle = Car | Bike;

function identifyVehicle(vehicle: Vehicle): string {
    //Your code here
    return vehicle.type;
}
//------------------------------------------------
//Conditional types
//-----------------------------------------------
type TypeName<T> =
  T extends string ? "string" :
  T extends number ? "number" :
  T extends boolean ? "boolean" :
  "object";

type TestString = TypeName<"hello">; // expect "string"
type TestNumber = TypeName<42>; // expect "number"
type TestBoolean = TypeName<true>; //expect "boolean"
type TextObject = TypeName<{id: 1}> //expect "object"

//for testing conditonal types
const exampleA: TestString = "Liverpool";
const exampleB: TestNumber = 99;
const exampleC: TestBoolean = true;
const exampleD: TestObject = "object";


/***************************************
 * A type function IsSTring<T> that checks
 * if a given type is a string. If it is, return "Yes"
 * "No" Otherwise
****************************************/
//Conditional types
 type IsString<T> = T extends string ? "Yes" : "No";

type ResultA = IsString<string>; //expect "Yes"
type ResultB = IsString<number>; //expect "No"

//For testing conditional types
const outputA: ResultA = "Yes";
const outputB: ResultB = "No";




//runtime verification
const key: PersonKeys = "age";
console.log(`Key: ${key}, Value: ${person[key]}`);

//test updateProtperty
console.log(updateProperty({name: "Alice", age: 28}, "name", "Bob"));

//Teting inteception type
console.log(`User: ${user.name}, Age: ${user.age}, ID: ${identifier}`);

//Test identifyVehicle
console.log(identifyVehicle({type: "bike", hasBell: true}));

//Testing Conditional types
console.log(exampleA, exampleB, exampleC, exampleD);

//testing isString
console.log(outputA, outputB);