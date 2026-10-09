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

console.log("=== TypeScript BasketBall Team Tests");
