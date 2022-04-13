// variables:
let srcCards = ["A", "B", "C", "D", "E", "F", "A", "B", "C", "D", "E", "F"];
let len = srcCards.length;
let handOfCards = srcCards;
let board = document.getElementById("game-table");
let cardDiv;

// functions:
function shuffle(){
    let r = 0;
    let newHand = [];
    for (n = 0; n < len; n++){
        do {
            r = Math.floor((Math.random() * len));
        } while (newHand[r] != undefined);
        newHand[r] = srcCards[n];
    }
    return handOfCards = newHand;
}
function newGame(){
    shuffle();
    for(n of handOfCards){
        cardDiv = document.createElement("div");
        cardDiv.innerText = n;
        cardDiv.className = "cardBack";
        board.appendChild(cardDiv);
    }
}


// play:
// newGame();




