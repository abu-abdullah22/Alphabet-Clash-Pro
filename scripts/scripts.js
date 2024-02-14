// function playNow() {
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
    currentAlphabetElement.innerText = alphabet;
    
    // set background color 
    addBackgroundColor(alphabet) ; 
}

function playNow() {
    hideElement('home-screen') ;
    hideElement('final-score') ; 
    showElement('play-ground') ;
 
    setTextElement('current-score', 0) ;
    setTextElement('initial-life', 5) ;



    continueGame() ;

}


//capture keyboard key press
function handleKeyboardButtonPress(event) {
   const playerPress = event.key ;
   console.log(playerPress) ;

//    stop the game if pressed  esc 
if(playerPress === 'Escape'){
    gameOver() ;
}

   const currentAlphabetElement = document.getElementById('current-alphabet') ;
  const currentAlphabet = currentAlphabetElement.innerText ; 
  const expectedAlphabet = currentAlphabet.toLocaleLowerCase() ;

//    console.log(playerPress, expectedAlphabet) ;

   if(playerPress === expectedAlphabet) {
    const currentScore = getTextElement('current-score') ;
    const updatedScore = currentScore + 1 ;
    setTextElement('current-score', updatedScore) ;






    //updating score 
    // 1. getting current score 
    // const currentScoreElement = document.getElementById('current-score') ;
    // const currentScoreText = currentScoreElement.innerText ;
    // const currentScore = parseInt(currentScoreText) ; 
   

    // // 2. increasing score 
    // const newScore = currentScore + 1 ;

    // // 3. show the updated score 
    // currentScoreElement.innerText = newScore ; 





    //new round start
    removeBackgroundColor(expectedAlphabet) ;
    continueGame() ;
   }
   else{
    const initialLife = getTextElement('initial-life') ;
    const updatedLife = initialLife - 1 ;
    setTextElement('initial-life', updatedLife) ;

    if(updatedLife === 0) {
        gameOver() ;
    }








    //updating life
    // 1.getting initial life
    // const initialLifeElement = document.getElementById('initial-life') ;
    // const initialLifeText = initialLifeElement.innerText ;
    // const initialLife = parseInt(initialLifeText) ;

    // // 2. new score 
    // const newLife = initialLife - 1 ; 

    // // 3. updating life 
    // initialLifeElement.innerText = newLife ; 
   }
}
document.addEventListener('keyup', handleKeyboardButtonPress) ; 

function gameOver() {
    hideElement('play-ground') ;
    showElement('final-score');

    // final score 
    const lastScore = getTextElement('current-score') ; 
    setTextElement('last-score', lastScore) ;

    // clearing the last letter background 
    const currentAlphabet = getText('current-alphabet') ;
    removeBackgroundColor(currentAlphabet) ;
    
}