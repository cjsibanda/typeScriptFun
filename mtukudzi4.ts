////////////////////////////////////////////////
///////////  Abstract Classes //////////////////
////////////////////////////////////////////////
/*******************************************************************
* ----------- SafariAnimal (1. Abstract Classes) ------------------
* Abstract classes are like blueprints for related subclasses.
* They cannot be instatiated directly, but they allow you to share...
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
  abstract getTourSaftyBfiefing(): string;
}
