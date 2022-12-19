// part1 of next-level js , usign fill and map method and arrray constructor
function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(function(){
        return Math.floor(Math.random() * 6) + 1

    })
}

function getDicePlaceholderHtml(diceCount) {
    return new Array(diceCount).fill(0).map(function() {
        return `<div class="placeholder-dice"></div>`
    }).join('')
}


export {getDiceRollArray , getDicePlaceholderHtml}