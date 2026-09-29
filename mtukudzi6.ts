//-------------------------------------------------------------------------
// Mtukudzi Kitchen Management System
//------------------------------------------------------------------------

// 1. Generics & Tuples
function wrapInKitchenGroup<T>(leader: string, detail: T): [string, T] {
  return [leader, detail];
}

// 2. Abstract Classes & Polymorphism
abstract class KitchenMeal {
  constructor(
    public name: string,
    public size: string,
    protected price: number,
    protected specialSauce: boolean
  ) {}

  abstract makeMeal(): string;
  abstract bestCook(): string;
}

class MtukudziSpecial extends KitchenMeal {
  makeMeal(): string {
    return "Gotta add the Sauce!";
  }

  bestCook(): string {
    return "Victor M.";
  }
}

class VegetarianMeal extends KitchenMeal {
  makeMeal(): string {
    return "More Brocolli, less sauce!";
  }

  bestCook(): string {
      return "Mthabisi Z.";
    }
}

class BraaiSpecial extends KitchenMeal {
  makeMeal(): string {
    return "More boerewors with Salad";
  }

  bestCook(): string {
    return "Jabulani X.";
 }
}

// 3. Discriminated Unions
interface DineIn {
  kind: "dineIn";
  seats: number;
}

interface Catering {
  kind: "catering";
  seats: number;
}

interface Delivery {
  kind: "delivery";
  distance: number; 
}

interface Pickup {
  kind: "pickup";
  timeRemaining: number;
  applyDiscount: boolean;
}


type MtukudziOrder =  DineIn | Catering | Delivery |Pickup;

//---->?<----
function getOrderPoints(order: MtukudziOrder): number {
  switch(order.kind) {
    case "dineIn":
      return order.seats * 20;
    case "catering":
      return order.seats * 30;
    case "delivery":
      return order.distance * 17.5;
    case "pickup":
      return order.applyDiscount ? 30 : 20;
  }
}

/////////////////////////////////////////////////////////////////////////////
//////////////    Trust But Verify     //////////////////////////////<////////
/////////////////////////////////////////////////////////////////////////////
console.log(">>>> MTUKUDZI KITCHEN SYSTEM <<<<<<<<<<");

// 1. Testing Generics and Tuples
const group = wrapInKitchenGroup("Chef Curry", {customerName: "Victor", passID: 504});
console.log("1. Kitchen Group Tuple:", group);

// 2. Testing Polymorphsim
const testMeal: KitchenMeal[] = [
  new MtukudziSpecial("Order for Ben", "Large", 25.99, true),
  new VegetarianMeal("Order for Samson", "Medium", 20.45, false),
  new BraaiSpecial("Order for Xholiso", "small", 15.00, true)
];

testMeal.forEach(meal => {
  console.log(`2. ${meal.name}'s best cook`, meal.bestCook());
})

// 3. Testing Dicsriminated Unions
const cjMeal: MtukudiziOrder = {kind: "dineIn", seats: 5};
console.log("4. Maal Points added:", getOrderPoints(cjMeal));

  
  
