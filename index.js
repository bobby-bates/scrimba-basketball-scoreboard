let homeCount = 0
let guestCount = 0
const homeCountDisplay = document.getElementById('home-counter')
const guestCountDisplay = document.getElementById('guest-counter')


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
}