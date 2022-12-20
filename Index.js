import charData from "./data.js"
import { Character } from "./character.js"

//function to render 
function render(){
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
    document.getElementById('monster').innerHTML = orc.getCharacterHtml()
}

//declaring object contructor
const wizard = new Character(charData.hero)
const orc = new Character(charData.monster)
render() // default render funtion getcharacterhtml function with dice array with getPlaceholderHtml function

document.addEventListener('click',function(e){
    if (e.target.id === 'attack-button') {
    wizard.getDiceHtml()
    orc.getDiceHtml()
    wizard.takeDamage(orc.currentDiceScore)
    orc.takeDamage(wizard.currentDiceScore)
    render()
    if (wizard.dead || orc.dead) {
        endGame()
    }
    }
})


function endGame() {
    const endMessage = wizard.health === 0 && orc.health === 0 ?
        "No victors - all creatures are dead" :
        wizard.health > 0 ? "The Wizard Wins" :
        "The Orc is Victorious"
        const endEmoji = wizard.health > 0 ? "🔮" : "☠️"
        document.body.innerHTML = 
        `<div class="end-game">
            <h2>Game Over</h2>
            <h3>${endMessage}</h3>
            <p class="end-emoji">${endEmoji}</p>
        </div>` 
}