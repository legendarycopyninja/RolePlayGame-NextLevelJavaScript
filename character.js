//    part2 of next level js , object constrcutor
import { getDiceRollArray , getDicePlaceholderHtml } from "./utils.js"

function Character(data) {
    Object.assign(this, data)

    this.diceArray = getDicePlaceholderHtml(this.diceCount)

    this.getDiceHtml = function(diceCount) {
        return getDiceRollArray(diceCount).map(function(num){
            return `<div class="dice">${num}</div>`
           }).join('')
    }
    this.getCharacterHtml = function(){
        const {name,avatar,health,diceCount ,diceArray} = this

        const diceHtml = this.getDiceHtml(diceCount)
        return `<div class="character-card">
        <h4 class="name">${name}</h4>
        <img class="avatar" src="${avatar}" />
        <p class="health">health: <b> ${health}</b></p>
          <div class="dice-container">${diceHtml}</div>
          </div>`
    }
    
    this.getEmptyCharacterHtml = function(){
        const {name,avatar,health,diceCount ,diceArray} = this
        return `<div class="character-card">
        <h4 class="name">${name}</h4>
        <img class="avatar" src="${avatar}" />
        <p class="health">health: <b> ${health}</b></p>
          <div class="dice-container">${diceArray}</div>
          </div>`
    }

}

export { Character }