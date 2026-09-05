//-----------------------------------------
//Generics
//------------------------------------------
function echo<T>(arg: T): T {
    return arg; 
}

/********************************************************
 * ------------ wrapInArray (Generics) -------------------------------
 * function wrapInArray that takes an
 * argument of any type and returns an array of that type 
 * containing the provided value
 *********************************************************/
function wrapInArray<T>(value: T): T[] {
    return [value];
}

//--------------------------------------------
// Index types
//------------------------------------------
interface StringDictionary {
    [index: string]: string;
}

//Valid object creation to test
const myDictionary: StringDictionary = {
    greeting: "Hello, world!",
    farewell: "Goodbye!"
};

/// to add a valid property later
myDictionary.status = "Active";

/***************************************************
 * ------- getValueFromDict (Index Types) ----------
 * interface for a Dictionary which has string
 * keys and values can be either strings or numbers. return 
 * the value for a given key from dictionary
 ***********************************************/
interface MyDictionary {
    [index: string]: string | number;
}

function getValueFromDict(key: string, dict: MyDictionary): string | number | undefined {
    return dict[key];
}

//----------------------------------------
//Literal types
//----------------------------------------
type ButtonSizes = "small" | "medium" | "large";

//for testing
//A function that accepts my literal type
function getButtonPadding(size: ButtonSizes): string {
    switch (size) {
        case "small":
            return "4px 8px";
        case "medium":
            return "8px 16px";
        case "large":
            return "12px 24px";
    }
}

//---------------------------------------------
// ********** Trust but verify ***************
//----------------------------------------------
//testing generics
const result = echo("Hello, Mr. Sibanda");
console.log(result);
//testing wrapInArray (Generics)
console.log(wrapInArray(42));
//Testing index types
console.log("My Dictionary:", myDictionary);
//testing getValueFromDict (index types)
const dict = { name: "Sibanda", age: 99};
console.log(getValueFromDict("name", dict));
//5. Testing Literal types
//assign a valid literal type... then calling getButtonPadding
const selectedSize: ButtonSizes = "medium";
console.log("5. Selected button size:", selectedSize);
console.log("5. Padding for medium", getButtonPadding(selectedSize));