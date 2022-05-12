// variables:
let srcCards = ["a", "b", "c", "d", "e", "f", "a", "b", "c", "d", "e", "f"];
let numOfCards = srcCards.length;
let handOfCards = srcCards; // הקלפים שעל השולחן
let board = document.getElementById("game-table");
let flip1 = "";

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
function hover(event){
    let x = event.target;
    if (x != flip1){
        x.style.backgroundImage="url(back2.jpg)"
    }
}
function out (event){
    let x = event.target;
    if (x != flip1 || x.innerText != "no"){
        x.style.backgroundImage="url(back.jpg)"
    }
}
function pair(one, two){
    document.getElementById(two.id).style.backgroundImage=`url(${handOfCards[two.id]}.PNG)`; 
    alert("Well done!!");
    score += 2;
    one.style.backgroundImage="none";
    two.style.backgroundImage="none";
    one.innerText = "no";
    two.innerText = "no";
    flip1 = "";
}
function wrong(one, two){
    document.getElementById(two.id).style.backgroundImage=`url(${handOfCards[two.id]}.PNG)`; 
    alert("wrong...");
    one.style.backgroundImage="url(back.jpg)";
    two.style.backgroundImage="url(back.jpg)";
    flip1 = "";
}
let cardClick = (event) => {
    let x = event.target;
    document.getElementById(x.id).style.backgroundImage=`url(${handOfCards[x.id]}.PNG)`; 
    if (flip1 == ""){
        flip1 = event.target;
    } else if (flip1.innerText == x.innerText){
        pair(flip1, x);
    } else wrong(flip1, x);
    
}

function drawCards(){ 
    for (n in handOfCards){
        document.getElementById(n).style.backgroundImage="url(back.jpg)"; 
    }
}

function newGame(){ // התחלת המשחק
    shuffle();
    createCards(); 
    drawCards();
}

function createCards(){ // יצירת מקומות הקלפים
    for (n = 0; n < numOfCards; n++){
        let cardDiv = document.createElement("div");
        cardDiv.id = n;
        cardDiv.innerText = handOfCards[n];
        cardDiv.className = "noCard";
        cardDiv.onclick = cardClick;
        cardDiv.onmouseout = out;
        cardDiv.onmouseover = hover;
        board.appendChild(cardDiv);
    }
}

// init: