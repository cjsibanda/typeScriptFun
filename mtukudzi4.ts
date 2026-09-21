////////////////////////////////////////////////
///////////  Abstract Classes //////////////////
////////////////////////////////////////////////
/*******************************************************************
* ----------- SafariAnimal (1. Abstract Classes) ------------------
* Abstract classes are like blueprints for related subclasses.
* They cannot be instantiated directly, but they allow you to share...
* common properties and methods. 
* Subclasses implement specific behavior (abstract methods)
*******************************************************************/
abstract class SafariAnimal {
  constructor(public name: string, protected age: number, protected territory: string) {}
  
  //Shared implementation logic available to all safari animals
  public describeHabitat(): string {
    return `${this.name} roams the wild territory of ${this.territory}.`;
  }

  //Abstract method -> Every Subclass defines its own unique sound/behavior
  abstract makeCall(): string;

  //Abstract method -> Every subclass defines how its tours operate
  abstract getTourSafetyBriefing(): string;
}

/**************************************************************************
* --------------- Lion (2. Concrete subclass A) ---------------------------
* Concrete implementation of a Safari Animal representing the African Lion
***************************************************************************/
class Lion extends SafariAnimal {
  constructor(name: string, age: number, territory: string, private prideSize: number) {
    super(name, age, territory);
  }

  makeCall(): string {
    return "Roars loudly across Hwange!"
  }

  getTourSafetyBriefing(): string {
    return `Stay inside the Toyota Land Cruiser at all times. Pride size: ${this.prideSize} lions nearby.`;
  }

  public hunt(): string {
    return `${this.name} is leading a pride hunt in ${this.territory}.`
  }
}

/**************************************************************************
* --------------- Elephant (3. Concrete subclass B) ------------------------
* Concrete implementation of a Safari Animal representing an Elephant
***************************************************************************/
class Elephant extends SafariAnimal {
  constructor(name: string, age: number, territory: string, private tuskLengthMeters: number) {
    super(name, age, territory);
  }

  makeCall(): string {
    return "Trumpets loudly and rumbles across the savannah!";
  }

  getTourSafetyBriefing(): string {
    return `Maintain a safe distance and don't touch the elephant! ... Tusk reference: ${this.tuskLengthMeters}m.`;
  }
}

/**************************************************************************
* --------------- Springbok (3. Concrete subclass C) ------------------------
* Concrete implementation of a Safari Animal representing an Springbok
***************************************************************************/
class Springbok extends SafariAnimal {
  constructor(name: string, age: number, territory: string, private speed: number) {
    super(name, age, territory);
  }

  makeCall(): string {
    retrun "Leaps high into the air!";
  }

  getTourBiefing(): string {
    return `The Sprngboks top speed is: ${this.speed}`.;
  }
}


/******************************************************************************
* ----------------------------- Trust but Verify ------------------------------
* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*******************************************************************************/
// 1. Testing the Abstract Class Constraints
console.log("--- 1. Safari tour Initialization & Verification ---");

//If the line below is uncommented TypeScript will throw a compile error
// "Cannot create an instance of an abstract class"
// const smallAnimal = new SafariAnimal("Small", 7, "Wild");

// 2. Instantiating Concrete Subclasses
const sibanda = new Lion("Sibanda", 7, "Hwange Plains", 12);
const ndlovu = new Elephant("Ndlovu", 25, "Kruger Park", 1.5);

//3. Testing Lion Methods
console.log("--- Lion Operations ---");
console.log(sibanda.describeHabitat()); //Inherited shared logic
console.log("Call:", sibanda.makeCall()); //Implemented abstract method
console.log("Safety:", sibanda.getTourSafetyBriefing()); //Implemented abstract method
console.log("Behavior:", sibanda.hunt()); //Unique subclass method

//4. Testing Elephant Methods
console.log("--- Elephant Operations ---");
console.log(ndlovu.describeHabitat()); // Inherited shared logic
console.log("Call:", ndlovu.makeCall()); // Implement abstract method
console.log("Safety:", ndlovu.getTourSafetyBriefing()); // Implemented abstract method
console.log("Behavior:", ndlovu.sprayWater()); //Unique subclass method

//5. Testing Polymorphism
console.log("--- 2. Testing Polymorphism (Array of SafariAnimals) ---");
const safariPark: SafariAnimal[] = [sibanda, ndlovu];

safariPark.forEach((animal, index) => {
  console.log(`Tour Stop [${index + 1}]: ${animal.name}`);
  console.log(` -> Habitat: ${animal.describeHabitat()}`);
  console.log(` -> Sound: ${animal.makeCall()}`);
  console.log(` -> Briefing: ${animal.getTourSafetyBriefing()} `);
});




