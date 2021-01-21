document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray: { name: String, img: String }[] = [
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
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid: Element = document.querySelector('.grid')
    const resultDisplay: Element = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []


    function createBoard(): void {
        for (let i = 0; i < cardArray.length; i++) {
            var card: Element = document.createElement('img')
            card.setAttribute('src', 'assets/images/blank.png')
            card.setAttribute('data-id', i.toString())
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch(): void {
        var cards: NodeListOf<HTMLImageElement> = document.querySelectorAll('img')
        const optionOneId: any = cardsChosenId[0]
        const optionTwoId: any = cardsChosenId[1]
        console.log(cardsChosenId)
        if (optionTwoId == optionOneId) {
            cards[optionOneId].setAttribute('src', 'assets/images/blank.png')
            cards[optionTwoId].setAttribute('src', 'assets/images/blank.png')
            alert('You have clicked the same image!')
        } else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'assets/images/white.png')
            cards[optionTwoId].setAttribute('src', 'assets/images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'assets/images/blank.png')
            cards[optionTwoId].setAttribute('src', 'assets/images/blank.png')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length.toString()
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }

    function flipCard(): void {
        var cardId: any = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})