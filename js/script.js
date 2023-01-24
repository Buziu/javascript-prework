function kamieńButtonClicked() {
  playGame(1);
}
let kamieńButton = document.getElementById("kamień");

kamieńButton.addEventListener("click", kamieńButtonClicked);

function papierButtonClicked() {
  playGame(2);
}
let papierButton = document.getElementById("papier");

papierButton.addEventListener("click", papierButtonClicked);
function nożyceButtonClicked() {
  playGame(3);
}
let nożyceButton = document.getElementById("nożyce");

nożyceButton.addEventListener("click", nożyceButtonClicked);
function playGame(playerInput) {
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

  let argPlayerMove = getMoveName(playerInput);

  console.log("Gracz wpisał: " + playerInput);

  console.log("moves:", argComputerMove, argPlayerMove);

  displayResult(argComputerMove, argPlayerMove);
}
