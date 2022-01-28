
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let newcard
let cards = []
let player ={
    name : "Your chips",
    chips : 200
}
let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": $" + player.chips
function getRandomCard() {
    let returnRandom = Math.floor(Math.random() * 13 + 1)
    if (returnRandom === 1) {
        return 11
    }
    else if (returnRandom > 10) {
        return 10
    }
    else {
        return returnRandom
    }
}
function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    isAlive = true
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    hasBlackjack =false
    renderGame()
}
function renderGame() {

    if (sum <= 20) {
        message = "Do you want to draw a new card"
       isAlive =true
    }
    else if (sum === 21) {
        message = " You have got Blackjack"
        hasBlackjack = true
    }
    else {
        message = "You are out of game"
        isAlive = false
    }
    sumEl.textContent = "Sum: " + sum
    messageEl.innerText = message
    cardsEl.textContent = "Cards: " + cards[0];
    for (let i = 1; i < cards.length; i++) {
        cardsEl.textContent += "," + cards[i]
    }
}
function newCard() {
     
         if(isAlive === true && hasBlackjack === false)
         {
        newcard = getRandomCard()
        sum += newcard
        cards.push(newcard)
        renderGame()
         }
    
}