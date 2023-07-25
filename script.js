class Game {
  constructor(field = [],isEmpty, whichTurn, turn) {
    this.field = field;
    this.isEmpty = isEmpty;
    this.whichTurn = whichTurn;
    this.turn=turn;
  }

  setTurn(whatTurn){
    this.turn=whatTurn;
    }

  checkEmpty(fieldIndex){
    if(this.field[fieldIndex]==" ") {this.isEmpty = true}
    else {this.isEmpty = false};
    }

  setSign(fieldIndex) {
    this.field[fieldIndex] = this.whichTurn;
  }

  changeTurn(newTurn){
    newTurn = newTurn.trim();
    newTurn != 'O' ? this.whichTurn = "O" : this.whichTurn = "X";
  }

  reset() {
    this.field = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    this.whichTurn = "X";
    this.turn = 0;
    var but = "b";
    for(let i =0; i <9; i++){
    but ="b"+i;
    document.getElementById(but).innerHTML = " ";
    }
    document.getElementById("nowTurn").innerHTML = "Now turn: X";
  }

  checkWin(field1,field2,field3){
    if(
    field1==field2 && field2==field3 && field3 ==this.whichTurn)  
    {return true;}
    else {return false;}
  } 
}

const game = new Game([" ", " ", " ", " ", " ", " ", " ", " ", " "], true, "X", 0);

function checkWin(){
       if(game.checkWin(game.field[0],game.field[1],game.field[2]))  {return true;}
  else if(game.checkWin(game.field[3],game.field[4],game.field[5]))  {return true;}
  else if(game.checkWin(game.field[6],game.field[7],game.field[8]))  {return true;}
  else if(game.checkWin(game.field[0],game.field[3],game.field[6]))  {return true;}
  else if(game.checkWin(game.field[1],game.field[4],game.field[7]))  {return true;}
  else if(game.checkWin(game.field[2],game.field[5],game.field[8]))  {return true;}
  else if(game.checkWin(game.field[0],game.field[4],game.field[8]))  {return true;}
  else if(game.checkWin(game.field[2],game.field[4],game.field[6]))  {return true;}
  else {return false;}
};

function clickButton(button_id, fieldIndex) {
  game.checkEmpty(fieldIndex);

  if(game.isEmpty){
    game.setSign(fieldIndex);
    document.getElementById(button_id).innerHTML = game.whichTurn;
    game.setTurn(game.turn +1);
  }

  if(checkWin()){
    document.getElementById("nowTurn").innerHTML = "Game has ended";
    setTimeout(() => {
    alert("Player "+game.whichTurn+" has won. Press OK to restart.") ;
      game.reset();
    }, 1);
  }
  else if(game.turn==9){
    document.getElementById("nowTurn").innerHTML = "Game has ended";
    setTimeout(() => {
    alert("No one won. Press OK to restart.") ;
    game.reset();
    }, 1);
  }
  else {
    game.changeTurn(game.whichTurn);
    document.getElementById("nowTurn").innerHTML = "Now turn: "+game.whichTurn;
  }

 
};