let homeCount = 0
let guestCount = 0
let timer = 15
const homeCountDisplay = document.getElementById('home-counter')
const guestCountDisplay = document.getElementById('guest-counter')
const timerDisplay = document.getElementById('timer')

const countdownId = setInterval(countdown(), 1000)

function countdown() {
    console.log('in countdown()')
    console.log(timer)
    timer = 15
    timerDisplay.textContent = `0:${timer}`
    
    // if timer is at 0:
    if (timer == -1) {
        // Display the winner
    } else {
        
    }
}

function highlightLeader() {
    const removeHome = homeCountDisplay.removeAttribute('id', 'leader')
    const removeGuest = guestCountDisplay.removeAttribute('id', 'leader')
    
    if (homeCount > guestCount) {
        homeCountDisplay.setAttribute('id', 'leader')
        removeGuest
    } else if (guestCount > homeCount) {
        guestCountDisplay.setAttribute('id', 'leader')
        removeHome
    } else {
        removeHome
        removeGuest
    }
}

function incrementCount(team, points) {    
    if (team == 'home') {
        homeCount += points
        homeCountDisplay.textContent = homeCount
    } else {
        guestCount += points
        guestCountDisplay.textContent = guestCount
    }
    highlightLeader()
}

function newGame() {
    homeCount = 0
    guestCount = 0
    homeCountDisplay.textContent = 0
    guestCountDisplay.textContent = 0
    // Clear any highlighted score:
    highlightLeader()
    
    // Reset to 30 seconds & start timer
    countdownId
}