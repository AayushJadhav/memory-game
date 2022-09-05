const gameBoard = document.querySelector("#game-board");
const scoreTxt = document.querySelector("#score");
var score = 0;

var resultTxt = document.querySelector("#conclusion");
resultTxt.style.display = "none";

const Cards = [
    {
        "name": "cheeseBurger",
        "src": "./images/cheeseburger.png"
    },
    {
        "name": "fries",
        "src": "./images/fries.png"
    },
    {
        "name": "hotdog",
        "src": "./images/hotdog.png"
    },
    {
        "name": "ice-cream",
        "src": "./images/ice-cream.png"
    },
    {
        "name": "milkshake",
        "src": "./images/milkshake.png"
    },
    {
        "name": "pizza",
        "src": "./images/pizza.png"
    },
    {
        "name": "cheeseBurger",
        "src": "./images/cheeseburger.png"
    },
    {
        "name": "fries",
        "src": "./images/fries.png"
    },
    {
        "name": "hotdog",
        "src": "./images/hotdog.png"
    },
    {
        "name": "ice-cream",
        "src": "./images/ice-cream.png"
    },
    {
        "name": "milkshake",
        "src": "./images/milkshake.png"
    },
    {
        "name": "pizza",
        "src": "./images/pizza.png"
    }
];

var CardsChosen = [];
var CardsChosenIds = [];

const CardsMatched = [];

var hasMatched = false;

Cards.sort(() => 0.5 - Math.random());

createBoard();

function createBoard () {
    for (var i = 0; i < Cards.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('src', "./images/blank.png");
        card.setAttribute('class', "image")
        card.setAttribute('id', i);
        card.addEventListener('click', clickHandler)
        gameBoard.appendChild(card);
    }

    console.log(Cards);
}

function checkForMatch() {
    var cardImgs = document.querySelectorAll('img');

    if (CardsChosen[0].name === CardsChosen[1].name) {
        hasMatched = true;
    } else {
        hasMatched = false;
    }

    if (CardsChosenIds[0] == CardsChosenIds[1]) {
        alert("You have clicked the same card!");
        hasMatched = false;
    }

    if (hasMatched) {
        alert("Match!");
        CardsChosenIds.forEach(id => {
            cardImgs[id].setAttribute('src', './images/white.png');
            cardImgs[id].removeEventListener('click', clickHandler);
            CardsMatched.push(cardImgs[id]);
        });
        
        score += 1;
    } else {
        alert("Not matched");
        CardsChosenIds.forEach(id => {
            cardImgs[id].setAttribute('src', "./images/blank.png");
        })
    }
    
    CardsChosen = [];
    CardsChosenIds = [];

    scoreTxt.innerHTML = score;

    if (CardsMatched.length == cardImgs.length) {
        resultTxt.style.display = "block";
        resultTxt.innerHTML = "You have won!";
        document.querySelector("#score-container").style.display = "none";
    }
}

function clickHandler() {
    var cardID = this.getAttribute('id');
    var cardName = Cards[cardID].name;
    this.setAttribute('src', "./images/" + cardName + ".png");
    CardsChosen.push(Cards[cardID]);
    CardsChosenIds.push(cardID);

    if (CardsChosen.length == 2) {
        setTimeout(checkForMatch, 100);
        
    }
}

scoreTxt.innerHTML = score;