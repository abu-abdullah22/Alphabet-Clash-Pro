// function play() {
//     //hide the home screen 
//     const homeSection = document.getElementById('home-screen') ;
//     // console.log(homeSection.classList)
//     homeSection.classList.add('hidden')

//     // show the playground
//     const playGround = document.getElementById('play-ground') ;
//     playGround.classList.remove('hidden')
// }
function continueGame() {
    // step 1: random alphabet generate 
    const alphabet = getARandomAlphabet() ; 
    console.log(alphabet) ; 

    // set a random alphabet 
    const currentAlphabetElement = document.getElementById('current-alphabet') ;
    currentAlphabetElement.innerText = alphabet.toUpperCase() ;
    
    // set background color 
    addBackgroundColor(alphabet) ; 
}
function playNow() {
    hideElement('home-screen') ;
    showElement('play-ground') ;
    continueGame() ;
}