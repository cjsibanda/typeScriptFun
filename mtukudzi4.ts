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
    return `Maintain a safe distance and don't touch the Elephant! ... Tusk reference: ${this.tuskLengthMeters}m.`;
  }
}



