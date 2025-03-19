//Código para ligar a lampada 
const btnOn = document.getElementById('btnLigar');
const btnOff = document.getElementById('btnDesligar');

var corpo = document.querySelector('body');
const img = document.querySelector('#lampada')
var topImg = document.querySelector('#topImg');
var titulo = document.querySelector('header h1');
var somClick = document.querySelector('#clique');
var somGrito = document.querySelector('#grito');
var somQuebra = document.querySelector('#quebrar');
let funcaoAtiva = true

btnOn.addEventListener('click', () => {
    if (!funcaoAtiva) return;
    
    img.src = './img/ligada.jpg';
    topImg.src = './img/beijaflor.gif';
    corpo.classList.remove('noite')
    somClick.currentTime = 0;
    somClick.play();

    // titulo.style.color = "black"
    // corpo.style.backgroundColor = 'white';

})

btnOff.addEventListener('click', () => {
    if (!funcaoAtiva) return;

    img.src = './img/desligada.jpg';
    topImg.src = './img/olhos.gif';
    corpo.classList.add('noite')
    somClick.currentTime = 0;
    somClick.play();

    // corpo.style.backgroundColor = 'black';
    // titulo.style.color = "white"

})

img.addEventListener('mouseover', () => {
    if (!funcaoAtiva) return;

    img.src = './img/ligada.jpg';
    topImg.src = './img/beijaflor.gif';
    corpo.classList.remove('noite')

    // corpo.style.backgroundColor = 'white';
    // titulo.style.color = "black"

})

img.addEventListener('mouseout', () => {
    if (!funcaoAtiva) return;

    img.src = './img/desligada.jpg';
    topImg.src = './img/olhos.gif';
    corpo.classList.add('noite')

    // corpo.style.backgroundColor = 'black';
    // titulo.style.color = "white"

})

let contarClique = 0;

img.addEventListener('click', () => {
    contarClique++;

    if (contarClique === 3) {
        img.src = './img/quebrada.jpg';
        somGrito.currentTime = 0;
        somGrito.play();
        somQuebra.currentTime = 0;
        somQuebra.play();
        funcaoAtiva = false;
        corpo.classList.add('noite')
        topImg.src = './img/olhos.gif'

        // btnOff.disabled = true;
        // btnOn.disabled = true;
    }
})