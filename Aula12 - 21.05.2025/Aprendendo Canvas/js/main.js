// Referenciando o Canvas
const canvas = document.getElementById('meu_canvas');
// Obtendo o contexto do gáfico 2d
const ctx = canvas.getContext('2d');
// const rei = document.getElementById('rei');
// const rainha = document.getElementById('rainha');
// const bispo = document.getElementById('bispo')
// const cavalo = document.getElementById('cavalo')
// const peao = document.getElementById('peao')
// const torre = document.getElementById('torre')
// const ctxrei = rei.getContext('2d')

// Tabuleiro
ctx.lineWidth =3;
ctx.strokeStyle = "skyblue";
ctx.strokeRect(50,50,800,800)

ctx.fillStyle = "skyblue";
ctx.fillRect(50,50,100,100);
ctx.fillRect(150,150,100,100);
ctx.fillRect(250,50,100,100);
ctx.fillRect(350,150,100,100);
ctx.fillRect(450,50,100,100);
ctx.fillRect(550,150,100,100);
ctx.fillRect(650,50,100,100);
ctx.fillRect(750,150,100,100);
ctx.fillRect(50,250,100,100);
ctx.fillRect(150,350,100,100);
ctx.fillRect(250,250,100,100);
ctx.fillRect(350,350,100,100);
ctx.fillRect(450,250,100,100);
ctx.fillRect(550,350,100,100);
ctx.fillRect(650,250,100,100);
ctx.fillRect(750,350,100,100);
ctx.fillRect(50,450,100,100);
ctx.fillRect(150,550,100,100);
ctx.fillRect(250,450,100,100);
ctx.fillRect(350,550,100,100);
ctx.fillRect(450,450,100,100);
ctx.fillRect(550,550,100,100);
ctx.fillRect(650,450,100,100);
ctx.fillRect(750,550,100,100);
ctx.fillRect(50,650,100,100);
ctx.fillRect(150,750,100,100);
ctx.fillRect(250,650,100,100);
ctx.fillRect(350,750,100,100);
ctx.fillRect(450,650,100,100);
ctx.fillRect(550,750,100,100);
ctx.fillRect(650,650,100,100);
ctx.fillRect(750,750,100,100);

// peças
// ctx.drawImage(rei,450,50,100,100);
// ctx.drawImage(rainha,350,50,100,100);
// ctx.drawImage(bispo,250,50,100,100);
// ctx.drawImage(bispo,550,50,100,100);
// ctx.drawImage(cavalo,160,75,75,75)
// ctx.drawImage(cavalo,660,75,75,75)
// ctx.drawImage(torre,60,75,75,75)
// ctx.drawImage(torre,760,75,75,75)
// ctx.drawImage(peao,60,175,75,75)
// ctx.drawImage(peao,160,175,75,75)
// ctx.drawImage(peao,260,175,75,75)
// ctx.drawImage(peao,360,175,75,75)
// ctx.drawImage(peao,460,175,75,75)
// ctx.drawImage(peao,560,175,75,75)
// ctx.drawImage(peao,660,175,75,75)
// ctx.drawImage(peao,760,175,75,75)

// Peões
const peaoazul = new Image();
peaoazul.src = '../img/peao1.png';
peaoazul.onload = () => {
    ctx.drawImage(peaoazul,50,150,100,100);
    ctx.drawImage(peaoazul,150,150,100,100);
    ctx.drawImage(peaoazul,250,150,100,100);
    ctx.drawImage(peaoazul,350,150,100,100);
    ctx.drawImage(peaoazul,450,150,100,100);
    ctx.drawImage(peaoazul,550,150,100,100);
    ctx.drawImage(peaoazul,650,150,100,100);
    ctx.drawImage(peaoazul,750,150,100,100);
};

const peaobranco = new Image();
peaobranco.src = '../img/peao2.png';
peaobranco.onload = () => {
    ctx.drawImage(peaobranco,50,650,100,100)
    ctx.drawImage(peaobranco,150,650,100,100)
    ctx.drawImage(peaobranco,250,650,100,100)
    ctx.drawImage(peaobranco,350,650,100,100)
    ctx.drawImage(peaobranco,450,650,100,100)
    ctx.drawImage(peaobranco,550,650,100,100)
    ctx.drawImage(peaobranco,650,650,100,100)
    ctx.drawImage(peaobranco,750,650,100,100)
};


// TORRES
const torreazul = new Image();
torreazul.src = '../img/torre1.png';
torreazul.onload = () => {
    ctx.drawImage(torreazul, 50,50,100,100);
    ctx.drawImage(torreazul, 750,50,100,100);
};

const torrebranca = new Image();
torrebranca.src = '../img/torre2.png';
torrebranca.onload = () => {
    ctx.drawImage(torrebranca, 50,750,100,100)
    ctx.drawImage(torrebranca, 750,750,100,100)
};


// BISPOS
const bispoazul = new Image();
bispoazul.src= '../img/bispo1.png';
bispoazul.onload = () => {
    ctx.drawImage(bispoazul,250,50,100,100)
    ctx.drawImage(bispoazul,550,50,100,100)
};

const bispobranco = new Image();
bispobranco.src = '../img/bispo2.png';
bispobranco.onload = () => {
    ctx.drawImage(bispobranco, 250, 750, 100,100)
    ctx.drawImage(bispobranco, 550, 750, 100,100)
};


// CAVALOS
const cavaloazul = new Image();
cavaloazul.src = '../img/cavalo1.png';
cavaloazul.onload = () => {
    ctx.drawImage(cavaloazul, 150,50,100,100);
    ctx.drawImage(cavaloazul, 650,50,100,100);
};

const cavalobranco = new Image();
cavalobranco.src = '../img/cavalo2.png';
cavalobranco.onload = () => {
    ctx.drawImage(cavalobranco, 150,750,100,100);
    ctx.drawImage(cavalobranco, 650,750,100,100);
};

// REIS
const reiazul = new Image()
reiazul.src = '../img/rei1.png';
reiazul.onload = () => {
    ctx.drawImage(reiazul,450,50,100,100)
};
const reibranco = new Image()
reibranco.src = '../img/rei2.png';
reibranco.onload = () => {
    ctx.drawImage(reibranco,450,750,100,100)
};


// RAINHAS
const rainhaazul = new Image();
rainhaazul.src = '../img/rainha1.png';
rainhaazul.onload = () => {
    ctx.drawImage(rainhaazul,350,50,100,100)
};

const rainhabranca = new Image();
rainhabranca.src = '../img/rainha2.png';
rainhabranca.onload = () => {
    ctx.drawImage(rainhabranca,350,750,100,100)
}
