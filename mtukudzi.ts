

////keyof and typeof Operators
let person = {name: 'Alice', age: 28};
type Person = typeof person;
type PersonKeys = keyof Person; //"name" | "age"

/***********************************************************
**************** updateProperty<T> ************************ 
* A function that updates a property's value in an object,
*  given the object a property key, and a value.
************************************************************/
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
 * ******* IsSTring<> *******************
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

//----------------------------------------------
// ************ Enum Types *********************
// NOTE: IMPORTANT -- run file with tsx
// ...to handle full ts execution including enums
// npx tsx....
//------------------------------------------------
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

enum ColorGucci {Red = 2, Green = 2, Blue = 4}
let cGucci: ColorGucci = ColorGucci.Green;


/****************************************************
 * **** classifyDay *********************************
 * enum example for days of the week
 * A function classifyDay takes a day
 * and returns whether it's a weekend or a weekday 
****************************************************/

//the enum
enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function classifyDay(day: Days): string {
    if (day === Days.Saturday || day === Days.Sunday) {
        return "Weekend";
    } else {
        return "Weekday";
    }
}



//---------------------------------------------------------------
// **** Trust but Verify *************************************
//--------------------------------------------------------------
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
//Testing enum types (need tsx for enums)
console.log("Default enum Green value:", c);
console.log("Default enum reverse mapping [1]", Color[1]);
console.log("Custom enum Green value:", cGucci);
console.log("Custom enum reverse mapping [2]:", ColorGucci[2]);
//Testing classifyDay
console.log(classifyDay(Days.Monday));
console.log(classifyDay(Days.Saturday));

