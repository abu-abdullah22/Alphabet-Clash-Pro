function hideElement(elementId) {
    const element = document.getElementById(elementId); 
    element.classList.add('hidden') ;
}

function showElement(elementId) {
    const element = document.getElementById(elementId) ;
    element.classList.remove('hidden') ;
}

function addBackgroundColor(elementId) {
    const element = document.getElementById(elementId) ;
    element.classList.add('bg-[#FFA500]') ;
}

function removeBackgroundColor(elementId) {
    const element = document.getElementById(elementId) ;
    element.classList.remove('bg-[#FFA500]')
}

function getARandomAlphabet(){
    //alphabet array creation
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz' ;
    const alphabets = alphabetString.split('');

    //random index generation 
    const randomNumber = Math.random()*25 ;
    const index = Math.round(randomNumber) ; 
    // console.log(index) ;

    const alphabet = alphabets[index] ;
    // console.log(index, alphabet) ;
    return alphabet ;

}


function getTextElement(elementId){
    const element = document.getElementById(elementId) ;
    const elementText = element.innerText ;
    const value = parseInt(elementText) ;
    return value ; 
}

function setTextElement(elementId, value) {
    const element = document.getElementById(elementId) ;
    element.innerText = value ;
    
}



function getText(elementId) {
    const element = document.getElementById(elementId) ;
    const text = element.innerText ;
    return text ; 
} 
 
  
