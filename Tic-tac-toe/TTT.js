
// JavaScript code for the Tic Tac Toe game
var board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
var player = "X";

function play(cell) {
  if (board[cell] == " ") {
    board[cell] = player;
    document.getElementsByClassName("cell")[cell].innerHTML = player;
    checkForWin();
    checkForDraw();
    player = (player == "X") ? "O" : "X";
  }
}

function checkForWin() {
  if (
    (board[0] == player && board[1] == player && board[2] == player) ||
    (board[3] == player && board[4] == player && board[5] == player) ||
    (board[6] == player && board[7] == player && board[8] == player) ||
    (board[0] == player && board[3] == player && board[6] == player) ||
    (board[1] == player && board[4] == player && board[7] == player) ||
    (board[2] == player && board[5] == player && board[8] == player) ||
    (board[0] == player && board[4] == player && board[8] == player) ||
    (board[2] == player && board[4] == player && board[6] == player)
  ) {
    alert(player + " wins!");
    reset();
  }
}

function checkForDraw() {
  var emptyCells = board.filter(function(cell) {
    return cell == " ";
  });
  if (emptyCells.length == 0) {
    alert("It's a draw!");
    reset();
  }
}
function reset() {
  for (var i = 0; i < 9; i++) {
    board[i] = " ";
    document.getElementsByClassName("cell")[i].innerHTML = " ";
  }
  player = "X";
}
