const btnYes = document.getElementById('btn-yes');
const btnNo = document.getElementById('btn-no');
const question = document.getElementById('question');

let fontSize = 1;
let paddingUpDown = 1;
let paddingLeftRight = 1;
let po

btnNo.addEventListener('click', () => { 
    fontSize = fontSize + 0.5;
    paddingUpDown = paddingUpDown + 0.5;
    paddingLeftRight = paddingLeftRight + 0.5;

    btnYes.style.fontSize = fontSize + 'em';
    btnYes.style.padding = paddingUpDown + 'em ' + paddingLeftRight + 'em';

});

btnYes.addEventListener('click', () => {
    btnYes.style.display = 'none';
    btnNo.style.display = 'none';
    question.textContent = "Iya Aku Juga Sayang Kamu!!!";
});   