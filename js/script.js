function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return "kamień";
  } else if (argMoveId == 2) {
    return "papier";
  } else if (argMoveId == 3) {
    return "nożyce";
  }
  printMessage("Nie znam ruchu o id " + argMoveId + ".");
  return "nieznany ruch";
}
function displayResult(argComputerMove, argPlayerMove) {
  printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);

  if (
    (argComputerMove == "kamień" && argPlayerMove == "papier") ||
    (argComputerMove == "nożyce" && argPlayerMove == "kamień") ||
    (argComputerMove == "papier" && argPlayerMove == "nożyce")
  ) {
    printMessage("Ty wygrywasz!");
  } else if (
    (argComputerMove == "kamień" && argPlayerMove == "kamień") ||
    (argComputerMove == "papier" && argPlayerMove == "papier") ||
    (argComputerMove == "nożyce" && argPlayerMove == "nożyce")
  ) {
    printMessage("Remis!");
  } else {
    printMessage("Przegrywasz!");
  }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log("Wylosowana liczba to: " + randomNumber);

let argComputerMove = getMoveName(randomNumber);

/* if (randomNumber == 1) {
  computerMove = "kamień";
} else if (randomNumber == 2) {
  computerMove = "papier";
} else if (randomNumber == 3) {
  computerMove = "nożyce";
} */

let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");

console.log("Gracz wpisał: " + playerInput);

let argPlayerMove = "nieznany ruch";

if (playerInput == "1") {
  argPlayerMove = "kamień";
} else if (playerInput == 2) {
  argPlayerMove = "papier";
} else if (playerInput == 3) {
  argPlayerMove = "nożyce";
}

console.log("moves:", argComputerMove, argPlayerMove);

displayResult(argComputerMove, argPlayerMove);
