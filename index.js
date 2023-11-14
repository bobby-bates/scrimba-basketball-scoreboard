let homeCount = 0
let guestCount = 0
let homeCountDisplay = document.getElementById('home-counter')
let guestCountDisplay = document.getElementById('guest-counter')

function incrementCount(team, points) {    
    if (team == 'home') {
        homeCount += points
        homeCountDisplay.textContent = homeCount
    } else {
        guestCount += points
        guestCountDisplay.textContent = guestCount
    }
}
