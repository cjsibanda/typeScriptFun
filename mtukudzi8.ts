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


// 7. Union Types & Conditional Logic
// Assigns a tier based on a player's overall rating.
type PlayerTier = "elite" | "gold" | "silver" | "bronze";

function getBasketballPlayerTier(rating: number): PlayerTier {
  if (rating >= 92) return "elite";
  if (rating >= 85) return "gold";
  if (rating >= 75) return "silver";

  return "bronze";
}

// 8. Unknown | Type Guards | Runtime Validation
//Verifies saved player data before treating it as a player card
function isBaskestballPlayerCard(
  value: unknown
): value is BasketBallPlayerCard {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const record = value as Record<string, unknown>;

  return (
    typeof record.name === "string" &&
    typeof record.overallRating === "number" &&
    Number.isFinite(record.overallRating) &&
    BASKETBALL_POSITIONS.some(position => position === record.position) &&
    typeof record.team === "string" &&
    typeof record.imageUrl === "string" &&
    typeof record.shooting === "number" &&
    Number.isFinite(record.shooting) &&
    typeof record.passing === "number" &&
    Number.isFinite(record.passing) &&
    typeof record.passing === "number" &&
    Number.isFinite(record.dribbling) &&
    typeof record.defense === "number" &&
    Number.isFinite(record.defense) &&
    typeof record.rebounding === "number" &&
    Number.isFinite(record.rebounding) &&
    typeof record.athleticism === "number" &&
    Number.isFinite(record.athleticism)
  );
}


//9. Object Spread + Partial Utility Type
// Updates the selected players properties
//... without losing the remaining stats
function updateBaskeballPlayer(
  player: BasketBallPlayerCard,
  update: Partial<BasketBallPlayerCard>
): BasketBallPlayerCard {
  return {
    ...player,
    ...update
  };
}

// 10. JSON + Loca; Storage + Error Handling
// Saves and loads player cards in a browser
// Runtime validation prevents invalid saved data from being trusted
const BASKETBALL_STORAGE_KEY = "basketball_player_card";

const defaultBasketballPlayer: BasketBallPlayerCard = {
  name: "Chales Barkley",
  overallRating: 99,
  position: "SG",
  team: "Niagara Saints",
  imageUrl: "",
  shooting: 98,
  passing: 87,
  dribbling: 98,
  defense: 92,
  rebounding: 87,
  athleticism: 97
};

function loadBasketballPlayer(): BasketBallPlayerCard {
  try {
    const saved = localStorage.getItem(BASKETBALL_STORAGE_KEY);

    if (saved !== null ) {
      const parsed: unknown = JSON.parse(saved);

      if (isBaskestballPlayerCard(parsed)) {
        return parsed;
      }

      console.log("Player data NOT valid; using defaults.");
    }
  } catch (error: unknown) {
    console.log("Failed to load player data:", error);
  }

  return { ...defaultBasketballPlayer };
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

// 7. Testing Player Rating Tiers ()
// (Union Types and Conditional Logic)
console.log(
  "7. Curry's Player Tier:",
  getBasketballPlayerTier(basketballPlayer.overallRating)
);

console.log(
  "7. Bronze Player Tier:",
  getBasketballPlayerTier(65)
);

// 8 Testing isBasketBallPlayerCard()
// (Unknown + Type Guards)
console.log(
  "8. Valid Player Card:",
  isBaskestballPlayerCard(basketballPlayer)
);

console.log(
  "8. Invalid Player Card:",
  isBaskestballPlayerCard({ name: "Unknown Player" })
);

// 9. Testing Partial & Object Spread
const updatedPlayer = updateBaskeballPlayer(
  basketballPlayer,
  {
    overallRating: 98,
    team: "Dream Team"
  }
)

console.log("9. Updated Player:", updatedPlayer);
console.log("9. Original Player Remains Unchanged: ", basketballPlayer)