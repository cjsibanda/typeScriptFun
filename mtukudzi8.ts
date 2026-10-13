/////////////////////////////////////////////////////////////////
/////// TypeScript BasketBall Team
/////////////////////////////////////////////////////////////////

//1. Generics  & Tuples
function wrapinPlayerGroup<T>(leader: string, detail: T): [string, T] {
  return [leader, detail];
}

// 2. Abstract Classes & Polymorphism
abstract class BasketballTeam {
  constructor(
    public name: string,
    public location: string,
    public owner: string,
    public arenaCapacity: number,
    protected specialContract: boolean
  ) {}

  abstract runPlay(): string;
  abstract bestGuard(): string; 
}

class gLeagueSide extends BasketballTeam {
  runPlay(): string {
    return "run Jolly Roger Switch!";
  }

  bestGuard(): string {
    return "Manu G.";
  }
}

class startingFive extends BasketballTeam {
  runPlay(): string {
    return "Cali Loop Fade-away";
  }

  bestGuard(): string {
    return "Kyrie I.";
  }
}

class euroSide extends BasketballTeam{
  runPlay(): string {
    return "Left to right cut and pop";
  }

  bestGuard(): string {
    return "Tony P"
  }
}

// 3. Discriminated Unions
interface TraditionalStadium {
  kind: "traditional";
  minSeats: number;
  owned: boolean;
}

interface ModernArena {
  kind: "modern";
  minSeats: number;
  owned: boolean;
}

interface RentedFacility {
  kind: "rented";
  minSeats: number;
  owned: boolean;
  hoursRestriction: boolean;
}

type BuildingType = TraditionalStadium | ModernArena | RentedFacility;

function getMaintenanceCosts(type: BuildingType): number {
  switch(type.kind) {
    case "traditional":
      return type.minSeats * 20;
    case "modern":
      return type.minSeats * 30;
    case "rented":
      return type.minSeats * 15;
  }
}

interface Player {
  playerNumber: string,
  position: string,
  weightKg: number;
  age: number
  heightMetres: number
  homeTown: string;
}

function getPlayerNumber(value: unknown): string {
  const player = value as Player;
  return player.playerNumber;
}


// 4 Union Itersection Types
// Intersection types combine multiple types into one
type playerType = "guard" | "forward" | "wing" | "center";

interface Identifiable {
  id: string;
}

interface Weighable {
  weightKg: number;
}

type WeighedPlayer = Identifiable & Weighable;

function describePlayer(player: WeighedPlayer): string {
  return `${player.id} weighs ${player.weightKg}kg`;
}

// 5. AS CONST + TYPEOF + INDEXED ACCESS TYPES
// Defines a fixed list of valid basketball positions
// Typescript dervices the Position from the list
const BASKETBALL_POSITIONS = [
  "PG",
  "SG",
  "SF",
  "PF",
  "C"
] as const;

type BasketballPosition = typeof BASKETBALL_POSITIONS[number];

// 6. Interfaces + Player Card Data
// Defines the structure of a basketball player card
interface BasketBallPlayerCard {
  name: string;
  overallRating: number;
  position: BasketballPosition;
  team: string;
  imageUrl: string;
  shooting: number;
  passing: number;
  dribbling: number;
  defense: number;
  rebounding: number;
  athleticism: number;
}


/********************************************************************************
*********************** Trust But Verify ***************************************** 
**********************************************************************************/
//1. Testing Generics & Tuples
const team = wrapinPlayerGroup("Chef Curry", {customerName: "Victor", playNumber: 33});
console.log("1. Player Group Tuple:", team);

// 2. Testing Polymorphism
const testTeam: BasketballTeam[] = [
  new gLeagueSide("Vipers", "Oakville", "Charles B", 12000, true),
  new startingFive("Hornets", "Toronto", "Shaq O", 15000, false),
  new euroSide("BobCats", "London", "Kenny G.", 14500, false)
];

testTeam.forEach(team => {
  console.log(`2. ${team.name}'s best cook`, team.bestGuard());
})

// 3. Testing Descriminated Unions
console.log("Test Descriminated Unions here...");

console.log("=== TypeScript BasketBall Team Tests");

// 4 Testing Union & Intersection types
const player: WeighedPlayer = {
  id: "Lebron-23",
  weightKg: 90.71
};

console.log("4. The player description is:", describePlayer(player));

// 5. Testing as const + typeof + indexed access types
const selectedPosition: BasketballPosition = "PG";

console.log("5. Available Positions:", BASKETBALL_POSITIONS);
console.log("5. Selected Position:", selectedPosition);

// 6. Testing Basketball Player Card Interface
const basketballPlayer: BasketBallPlayerCard = {
  name: "Chef Curry",
  overallRating: 98,
  position: "PG",
  team: "Eagles",
  imageUrl: "",
  shooting: 99,
  passing: 95,
  dribbling: 98,
  defense: 76,
  rebounding: 89,
  athleticism: 89
};

console.log("6. Basketball Player Card:", basketballPlayer);