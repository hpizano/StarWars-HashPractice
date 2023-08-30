// This event listener allows selectCharacter function to be called when hash changes
window.addEventListener('hashchange', () => {
    selectCharacter() ;
})

//variable to store character Data from API
let characters = {
    CharInfo: [] ,
    singleCharInfo: null 

}

//variable that allows to change data in id=displayChar inside .html file
const displayChar = document.getElementById('displayChar');

//function that allows me to display one character in displayChar div
async function getSingleChar(){
    
}


//variable that allows to change data into id=charInfor inside .html file
const charInfo = document.getElementById('charInfo');

//function that allows to insert and render list of character into HTML
function rendercharacterList (){
    const allChar = characters.CharInfo.map((character) => {
        return `<div> <a href = #${character.name} > ${character.name} </a> </div>`
    }) ;
    charInfo.innerHTML = allChar.join('');
}

//function that allows me to grab and store list data from API
async function grabCharacters(){
    const character = await fetch('https://swapi.dev/api/people/') ;
    const json = await character.json() ;
    console.log(json.results) ;
    characters.CharInfo = json.results ;
    console.log(' The Characters ----> ', characters )
}

// this is the render function for when page loads it can render data in HTML
async function render (){
    await grabCharacters();
    rendercharacterList();

}

//Calls for the render function once page loads
render();