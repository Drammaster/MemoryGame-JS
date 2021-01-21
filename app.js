document.addEventListener('DOMContentLoaded', function () {
    //card options
    var cardArray = [
        {
            name: 'fries',
            img: 'assets/images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'assets/images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'assets/images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'assets/images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'assets/images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'assets/images/hotdog.png'
        },
        {
            name: 'fries',
            img: 'assets/images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'assets/images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'assets/images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'assets/images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'assets/images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'assets/images/hotdog.png'
        }
    ];
    cardArray.sort(function () { return 0.5 - Math.random(); });
    var grid = document.querySelector('.grid');
    var resultDisplay = document.querySelector('#result');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];
    function createBoard() {
        for (var i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'assets/images/blank.png');
            card.setAttribute('data-id', i.toString());
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }
    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        var optionOneId = cardsChosenId[0];
        var optionTwoId = cardsChosenId[1];
        console.log(cardsChosenId);
        if (optionTwoId == optionOneId) {
            cards[optionOneId].setAttribute('src', 'assets/images/blank.png');
            cards[optionTwoId].setAttribute('src', 'assets/images/blank.png');
            alert('You have clicked the same image!');
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match');
            cards[optionOneId].setAttribute('src', 'assets/images/white.png');
            cards[optionTwoId].setAttribute('src', 'assets/images/white.png');
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        }
        else {
            cards[optionOneId].setAttribute('src', 'assets/images/blank.png');
            cards[optionTwoId].setAttribute('src', 'assets/images/blank.png');
            alert('Sorry, try again');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length.toString();
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found them all!';
        }
    }
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }
    createBoard();
});
