const buttonStart = document.getElementById('btn-mulai');
const buttonStop = document.getElementById('btn-stop');
const hello = document.getElementById('hello');
const wordList = [
    "Python",
    "JavaScript",
    "Java",
    "C++",
    "Ruby",
    "Go",
    "Swift",
    "Kotlin",
    "PHP",
    "TypeScript"
]

let index = 0; 
let intervalAnimasi;

buttonStart.addEventListener('click', function() {
    buttonStart.textContent = 'Loading...';
    buttonStart.disabled = true;
    buttonStop.style.display = 'inline-block';

    intervalAnimasi =setInterval(function() {
        hello.textContent = "Hello, " + wordList[index] + "!";
        index++;

        if (index >= wordList.length) {
            index = 0; 
        }
    },500);
})

buttonStop.addEventListener('click', function() {
    clearInterval(intervalAnimasi);
    buttonStart.textContent = 'Tekan Ini!!!';
    buttonStart.disabled = false;
    buttonStop.style.display = 'none';
    hello.textContent = "Hello, World!";
})  

