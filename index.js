// variables:
let srcCards = ["a", "b", "c", "d", "e", "f", "a", "b", "c", "d", "e", "f"];
let numOfCards = srcCards.length;
let handOfCards = srcCards; // הקלפים שעל השולחן
let board = document.getElementById("game-table");
let flip1 = "";
let scoreH = document.getElementById("Score");
let score = 0;
scoreH.innerHTML = score;

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
    // if (x != flip1){
    //     x.style.backgroundImage="url(back2.jpg)"
    // }
}
function out (event){
    let x = event.target;
    // if (x != flip1 || x.innerText != "no"){
    //     x.style.backgroundImage="url(back.jpg)"
    // }
}
function pair(one, two){
    two.className = "card"; 
    score += 2;
    scoreH.innerHTML = score;
    setTimeout(()=>{
        one.className = "noCard";
        two.className = "noCard";
        flip1 = "";
    }, 500)

}
function wrong(one, two){
    two.className = "card"; 
    setTimeout(()=>{
        one.className = "cardBack";
        two.className = "cardBack";
        flip1 = "";
    }, 500)
}
let cardClick = (event) => {
    let x = event.target;
    x.className = "card"; 
    if (flip1 == ""){
        flip1 = event.target;
        console.log("1");
    } else if (flip1.innerText == x.innerText){
        pair(flip1, x);
        console.log("2");
    } else {
        wrong(flip1, x);
        console.log("3");
    }
}

function drawCards(){ 
    for (n in handOfCards){
        document.getElementById(n).style.backgroundImage="url(back.jpg)"; 
    }
}

function newGame(){ // התחלת המשחק
    shuffle();
    createCards(); 
}

function createCards(){ // יצירת מקומות הקלפים
    for (n = 0; n < numOfCards; n++){
        let cardDiv = document.createElement("div");
        cardDiv.id = n;
        cardDiv.innerText = handOfCards[n];
        cardDiv.className = "cardBack";
        cardDiv.onclick = cardClick;
        cardDiv.onmouseout = out;
        cardDiv.onmouseover = hover;
        board.appendChild(cardDiv);
    }
}

// init: