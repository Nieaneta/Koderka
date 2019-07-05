
const slideTxt = document.querySelector(".slider-slide-txt");

const txt = "Jestem Junior Front-end Developerem.";

let indexText = 0;
const time = 60;

const addLetter = () => {
    slideTxt.textContent += txt[indexText];
    indexText++;

    if (indexText === txt.length) clearInterval(indexTyping);

};



const indexTyping = setInterval(addLetter, time);
