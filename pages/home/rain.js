function makeItRain() {
    var rainContainer = document.getElementsByClassName("background-slide-container")[0];
    var leftPercent = 0;
    var drops = "";

    while (leftPercent < 98) {
        //random number to add delay
        var randomDelay = Math.floor(Math.random() * (98 - 1 + 1) + 1);
        //random number to increment
        var randomIncrement = Math.floor(Math.random() * (5 - 2 + 1) + 2);
        //increment left
        leftPercent += randomIncrement;
        //add new raindrop
        drops += `<span class="rain-drop" style="left: ${leftPercent}%; bottom: ${
            100 - randomIncrement
        }%; animation-delay: 0.${randomDelay}s; animation-duration: 0.5${randomDelay}s;"></span>`;
    }

    rainContainer.innerHTML = drops;
}

makeItRain();
