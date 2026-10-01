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
    return "More Broccoli, less sauce!";
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


// 4. Utility Types (Readonly)
interface FoodieDemo {
  groupName: string;
  maxGuests: number;
}

type ReadonlyDemo = Readonly<FoodieDemo>;

// 5. Exhaustive Checking & Strict Type Guards
type KitchenArea = "storage" | "cooking" | "food prep" | "braai stand" | "dishwashing"

function getCleaningDetails(area: KitchenArea): string {
  switch(area) {
    case "storage":
      return "wipe storage racks and check expiration dates";
    case "cooking":
      return "Degrease Ventilation hoods and drain old oil";
    case "food prep":
      return "Scrub cutting boards and sharpen and sanitize knives";
    case "braai stand":
      return "Scrape away burnt food particles from grill and griddles";
    case "dishwashing":
      return "De-lime the dishwasher and disinfect the waste bins";
    default:
      const _exhaustiveCheck: never = area;
      return _exhaustiveCheck;
  }
}

// 6. Generic Constraints and Property Lookup
function GetEntityProperty<T, K extends keyof T>(entity: T, key: K): T[K] {
  return entity[key];
}

// 7a. Template Literal Types
// For Branch/Franchise IDs and operating locations
type Branch = "Borrowdale" | "Highlands" | "Marondera" | "Vic Falls";
type FranchiseCode = `Franchise-${Branch}`; // Evaluates to "Franchise-Borrowdale" | "Franchise-Highlands" | ...| ..,

type OwnerID = `OID-${number}`; //e.g., "OID-101"

interface KitchenInfo {
  ownerID: OwnerID;
  location: FranchiseCode; 
}

// 7b. To add a proper order type
type MealSize = "Small" | "Medium" | "Large";

//Order status
type OrderStatus = 
  | "pending"
  | "preparing"
  | "ready"
  | "served"
  | "cancelled";




interface OrderItem {
  mealName: string;
  size: MealSize;
  quantity: number;
  price: number;
  specialInstructions?: string;
}

interface KitchenOrder {
  orderID: string;
  waiterName: string;
  items: OrderItem[];
  orderType: MtukudziOrder;
  status: OrderStatus;
  tableNumber?: number;
  customerName?: string;
}

// Utility Types (Partial, Pick, Omit)
interface KitchenAppliance {
  serialNumber: string;
  model: string;
  manufacturer: string; 
  lastServicedDate: string;
  inService: boolean;
}


/////////////////////////////////////////////////////////////////////////////
//////////////    Trust But Verify     //////////////////////////////<////////
/////////////////////////////////////////////////////////////////////////////
console.log(">>>> MTUKUDZI KITCHEN SYSTEM <<<<<<<<<<");

// 1. Testing Generics and Tuples
const group = wrapInKitchenGroup("Chef Curry", {customerName: "Victor", passID: 504});
console.log("1. Kitchen Group Tuple:", group);

// 2. Testing Polymorphism
const testMeal: KitchenMeal[] = [
  new MtukudziSpecial("Order for Ben", "Large", 25.99, true),
  new VegetarianMeal("Order for Samson", "Medium", 20.45, false),
  new BraaiSpecial("Order for Xholiso", "small", 15.00, true)
];

testMeal.forEach(meal => {
  console.log(`2. ${meal.name}'s best cook`, meal.bestCook());
})

// 3. Testing Discriminated Unions
const cjMeal: MtukudziOrder = {kind: "dineIn", seats: 5};
console.log("4. Meal Points added:", getOrderPoints(cjMeal));

// 4. Testing Readonly Utility Types:
const currentTour: ReadonlyDemo = { groupName: "Hillcrest College", maxGuests: 7};
console.log("4. Readonly Group Foodie Demonstration:", currentTour.groupName);

// 5. Testing Exhaustiveness Checking
const testArea: KitchenArea = "storage";
console.log("5. Cleaning Information:", getCleaningDetails(testArea));
  
// 6. Testing Generic constraints
const stove: KitchenAppliance = {
  serialNumber: "ZW-123-T5643",
  model: "Kango Gold",
  manufacturer: "Monarch",
  lastServicedDate: "2026-08-15",
  inService: true
};

const modelName = GetEntityProperty(stove, "model");
console.log("6. Extracted Stove Model:", modelName);

// 7a. Testing Template Literal Types
const location: KitchenInfo = {
  ownerID: "OID-505",
  location: "Franchise-Highlands"
};
console.log(`7. Kitchen Information added: ${location.ownerID} in ${location.location}`);

// 7b. Testing for MealSize types
//adding order
// circle-bck
const order001: KitchenOrder = {
  orderID: "ORD-1001",
  waiterName: "Victor",
  items: [
    {
      mealName: "Mtukudzi Special",
      size: "Large",
      quantity: 2,
      price: 25.99,
      specialInstructions: "Extra Sauce please!!"
    },
    {
      mealName: "Vegetarian Meal",
      size: "Medium",
      quantity: 1,
      price: 20.99
    }
  ],
  orderType: {
    kind: "dineIn",
    seats: 4
  },
  tableNumber: 12
};





