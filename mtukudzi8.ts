// TypeScript BasketBall Team

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
console.log("=== TypeScript BasketBall Team Tests");
