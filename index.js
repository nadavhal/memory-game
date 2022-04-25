// variables:
let srcCards = ["A", "B", "C", "D", "E", "F", "A", "B", "C", "D", "E", "F"];
let numOfCards = srcCards.length;
let handOfCards = srcCards; // הקלפים שעל השולחן
let board = document.getElementById("game-table");
let cardDiv;

// functions:
function shuffle(){
    let r = 0;
    let newHand = [];
    for (n = 0; n < numOfCards; n++){
        do {
            r = Math.floor((Math.random() * numOfCards));
        } while (newHand[r] != undefined);
        newHand[r] = srcCards[n];
    }
    return handOfCards = newHand;
}

let hover = (eve) => {
    let x = eve.target.id;
    document.getElementById(x).style.backgroundImage="url(cards/" + handOfCards[x] + ".png)"; 
    console.log(eve.target);
}
let out = (even) => {
    let y = even.target.id;
    document.getElementById(y).style.backgroundImage="url(back.jpg)"; 
}
let cardClick = (event) => {
    console.log(" the card is " + event.target.id);
    // event.target.className = "cardBack";


    //div = event.target;

    //console.log (div);

    //debugger;
    
}

// function setCard(pos, type){        // draw 
    
//     switch (type) {
//         case "A": 
//         case "B": 
//         case "C": 
//         case "D":
//         case "E":
//         case "F": 
//         document.getElementById(pos).style.backgroundImage="url(cards/" + type + ".png)"; 
//         break;
            
//         case "back": 
//         document.getElementById(pos).style.backgroundImage="url(back.jpg)"; 
//         break;

//         case "empty":
//         default:
//         document.getElementById(pos).style.backgroundImage=null;
//         break;
//     }
// }

function drawCards(){ 
    for (n in handOfCards){
        document.getElementById(n).style.backgroundImage="url(back.jpg)"; 
    }
}

function newGame(){ // התחלת המשחק
    shuffle();
    drawCards();
}

function createCards(){ // יצירת מקומות הקלפים
    for (n = 0; n < numOfCards; n++){
        cardDiv = document.createElement("div");
        cardDiv.id = n;
        cardDiv.className = "noCard";
        cardDiv.onclick = cardClick;
        cardDiv.onmouseout = out;
        cardDiv.onmouseover = hover;
        board.appendChild(cardDiv);
    }
}

// init:
createCards(); // אתחול תצוגת קלפים למצב מוסתר