{
  const kamieńButton = document.getElementById("kamień"),
    papierButton = document.getElementById("papier"),
    nożyceButton = document.getElementById("nożyce");
  kamieńButton.addEventListener("click", kamieńButtonClicked);
  papierButton.addEventListener("click", papierButtonClicked);
  nożyceButton.addEventListener("click", nożyceButtonClicked);
  function kamieńButtonClicked() {
    playGame(1);
  }
  function papierButtonClicked() {
    playGame(2);
  }
  function nożyceButtonClicked() {
    playGame(3);
  }
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
    const randomNumber = Math.floor(Math.random() * 3 + 1),
      argComputerMove = getMoveName(randomNumber),
      argPlayerMove = getMoveName(playerInput);

    console.log("Wylosowana liczba to: " + randomNumber);
    console.log("Gracz wpisał: " + playerInput);
    console.log("moves:", argComputerMove, argPlayerMove);

    displayResult(argComputerMove, argPlayerMove);
  }
}
