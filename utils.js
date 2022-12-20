// part1 of next-level js , usign fill and map method and arrray constructor
function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(()=> Math.floor(Math.random() * 6) + 1
    )
}

function getDicePlaceholderHtml(diceCount) {
    return new Array(diceCount).fill(0).map(() => `<div class="placeholder-dice"></div>`
    ).join('')
}

const getPercentage = (remainingHealth, maximumHealth) => (100 * remainingHealth) / maximumHealth


export {getDiceRollArray , getDicePlaceholderHtml, getPercentage}