//    part2 of next level js , object constrcutor
import { getDiceRollArray , getDicePlaceholderHtml , getPercentage } from "./utils.js"


function Character(data) {
    Object.assign(this, data)

    this.diceArray = getDicePlaceholderHtml(this.diceCount)
    this.maxHealth = this.health

    this.getDiceHtml = function() {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceArray = this.currentDiceScore.map(num => `<div class="dice">${num}</div>`).join('')
        console.log(`currentDiceArray of ${this.name}: ${this.currentDiceScore}`)
              
    }

    this.takeDamage = function(attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
        this.health -= totalAttackScore
        if (this.health <= 0){
            this.dead = true  
            this.health = 0
        }    
        console.log(`Damage Taken Array ${this.name}  : ${attackScoreArray}`)
    }
/*
CHALLENGE
1. Instead of just logging the percent, getHealthBarHtml 
needs to return this string of html:
`<div class="health-bar-outer">
    <div class="health-bar-inner *YOUR CODE HERE* " 
        style="width: *YOUR CODE HERE* %;">
    </div>
</div>`
2. You need to make some changes to that string of HTML.
2a. If the amount of health left is 25% or lower, add the class 
"danger" to the div with the class "health-bar-inner".
2b. The width of that div should be the % health remaining. 
3. Be sure to add the healthBar variable to the string of HTML
rendered by getCharacterHtml.
**hint.md for help!!**       
*/

    this.getHealthBarHtml = function () {
        const percent = getPercentage(this.health, this.maxHealth)
        return `<div class="health-bar-outer">
        <div class="health-bar-inner ${percent <26 ? "danger" : ""} " 
            style="width: ${percent}%;">
        </div>
    </div>`

    }

    this.getCharacterHtml = function(){
        const {name,avatar,health,diceArray} = this
        const healthBar = this.getHealthBarHtml()

        return `<div class="character-card">
        <h4 class="name">${name}</h4>
        <img class="avatar" src="${avatar}" />
        <p class="health">health: <b> ${health}</b></p>
        ${healthBar}
          <div class="dice-container">${diceArray}</div>
          </div>`
    }

}

export { Character }