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
  weigthKg: number;
}

type WeighedPlayer = Identifiable & Weighable;

function describePlayer(player: WeighedPlayer): string {
  return `${player.id} weighs ${player.weightKg}kg`;
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

