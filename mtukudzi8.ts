///////////////////////////////////////////
// TypeScript BasketBall Team
///////////////////////////////////////////

//1. Generrics  & Tuples
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

console.log("=== TypeScript BasketBall Team Tests");
