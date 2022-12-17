/*
Challenge: 
1. Take the hard-coded HTML for the Wizard card, bring it 
   into index.js and then inject it back into its div with 
   JavaScript.
2. Do the same for Orc card. 
*/
/*
CHALLENGE
1. Strip out the hero and monster data (element id, name, avatar, 
health and dice score) and store them in variables

2. Write a renderCharacter() function that accepts the 5 new variables 
as paramaters and renders out a character with this data

3. Call renderCharacter() twice. Once with the hero variables and 
once with the monster variables to that both are rendered.

*/
// const heroElementId = "hero"
// const heroName = "Wizard"
// const heroAvatar = "images/wizard.png"
// const heroHealth = "60"
// const heroDiceRoll = 6

// const monsterElementId = "monster"
// const monsterName = "Orc"
// const monsterAvatar = "images/orc.png"
// const monsterHealth = "10"
// const monsterDiceRoll = 4

/*
CHALLENGE
1. Convert our consts into two objects called 
"monster" and "hero".
2. Update the renderCharacter() function so that it accepts 
a single object "data" as its parameter instead of five string/numbers, 
reducing the number of arguments to pass in from five to one.
3. Update the template now each variable is coming from "data".
4. Update the function call.
*/


const hero = {
    elementId: "hero", 
    name: "Wizard", 
    avatar: "images/wizard.png", 
    health: 60, 
    diceRoll: 6
}

const monster = {
    elementId: "monster", 
    name: "Orc", 
    avatar: "images/orc.png", 
    health: 10, 
    diceRoll: 4
}

// CHALLENGE
// 1. Deconstruct the data object 
// 2. Update the template string as necessary

function renderCharacter(data) {
 
    const {elementId,name,avatar,health,diceRoll} = data

    document.getElementById(elementId).innerHTML =`<div class="character-card">
    <h4 class="name">${name}/h4>
    <img class="avatar" src="${avatar}" />
    <p class="health">health: <b> ${health}</b></p>
    <div class="dice-container"><div class="dice">${diceRoll}</div></div>
    </div>`

}


renderCharacter(hero)
renderCharacter(monster)