import charData from "./data.js"
import { Character } from "./character.js"

//function to render 
function render(){
    document.getElementById('hero').innerHTML = wizard.getEmptyCharacterHtml()
    document.getElementById('monster').innerHTML = orc.getEmptyCharacterHtml()
}
//declaring object contructor
const wizard = new Character(charData.hero)
const orc = new Character(charData.monster)
render()

document.addEventListener('click',function(e){
    if (e.target.id === 'attack-button') {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
    document.getElementById('monster').innerHTML = orc.getCharacterHtml()
    }
})