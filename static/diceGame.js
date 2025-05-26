let dice =  document.querySelector('#dice');
let result = document.querySelector('#result');
let rolling = document.querySelector('#diceRolling');

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

dice.addEventListener('click', async function() {
    result.hidden = true;
    dice.hidden = true;

    rolling.src = rolling.src + "?t=" + Date.now();
    rolling.hidden = false;

    let randomNumber = Math.floor(Math.random() * 6) + 1

    await delay(2500); // Simulate rolling delay

    rolling.hidden = true;
    result.innerHTML = `You rolled a ${randomNumber}`;
    result.hidden = false;
    dice.hidden = false;
});
