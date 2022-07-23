const API = "https://api.adviceslip.com/advice";

async function getAdvice(){
    const dataFetch = await fetch(API);
    const advice = await dataFetch.json();
    
    document.querySelector(".main-container-advice").innerText = `"${advice.slip.advice}"`;
    document.querySelector(".main-container-id-number").innerText = `ADVICE #${advice.slip.id}`;
}

window.addEventListener("load", (e)=> getAdvice())

const button = document.querySelector(".main-container-button");
button.addEventListener("click", (e)=> getAdvice())