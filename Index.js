import charData from "./data.js"
import { Character } from "./character.js"

//function to render 
function render(){
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
    document.getElementById('monster').innerHTML = monster.getCharacterHtml()
}

let monstersArray = ["orc", "demon", "goblin"]
let isWaiting = false 

function getNewMonster() {
    const nextMonsterData = charData[monstersArray.shift()]
    console.log(nextMonsterData)
    return nextMonsterData ? new Character(nextMonsterData) : {}
}



//declaring object contructor
const wizard = new Character(charData.hero)
let monster = getNewMonster()
render() // default render funtion getcharacterhtml function with dice array with getPlaceholderHtml function

document.addEventListener('click',function(e){
    
    if (e.target.id === 'attack-button') {
        if(!isWaiting){
            wizard.getDiceHtml()
            monster.getDiceHtml()
            wizard.takeDamage(monster.currentDiceScore)
            monster.takeDamage(wizard.currentDiceScore)
            render()
        
            if(wizard.dead){
                endGame()
            }
            else if(monster.dead){
                isWaiting = true
                if(monstersArray.length > 0){
                    setTimeout(()=>{
                        isWaiting = false
                        monster = getNewMonster()
                        render()
                    },1500)
                }
                else{
                    endGame()
                }
            }   
        
        }

    }
})

function endGame() {
    const endMessage = wizard.health === 0 && monster.health === 0 ?
        "No victors - all creatures are dead" :
        wizard.health > 0 ? "The Wizard Wins" :
        "The Orc is Victorious"
    isWaiting = true

        const endEmoji = wizard.health > 0 ? "🔮" : "☠️"
        setTimeout(() => {
            document.body.innerHTML = 
            `<div class="end-game">
                <h2>Game Over</h2>
                <h3>${endMessage}</h3>
                <p class="end-emoji">${endEmoji}</p>
            </div>` 

        },1500)
}