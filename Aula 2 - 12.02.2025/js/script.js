
var botao = document.getElementById("btnSave");

botao.addEventListener('click', () => {
    let nome = document.getElementById("idNome").value;
    let info = document.getElementById("idInfo").value;

    document.getElementById("nome").innerText = nome;
    document.getElementById("info").innerText = info;
    document.getElementById("idNome").value = "";
    document.getElementById("idInfo").value = "";
});