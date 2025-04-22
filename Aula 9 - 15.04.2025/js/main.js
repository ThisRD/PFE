console.log("Ta funfano!");

let lists = document.getElementsByClassName("list");
let caixaEsquerda = document.querySelector("#esquerda");
let caixaDireita = document.querySelector("#direita");
let selected = null;

for(list of lists) {
    console.log(list);

    list.addEventListener("dragstart", (e) => {
        // console.log("dragstart", e.target);
        selected = e.target;
    });
    caixaDireita.addEventListener("dragover", (e) => {
        // console.log("dragover", e.target);
        e.preventDefault();
    });
    caixaDireita.addEventListener("drop", (e) => {
        caixaDireita.appendChild(selected);
        selected = null;

        e.stopImmediatePropagation();
    });
    list.addEventListener("dragstart", (e) => {
        // console.log("dragstart", e.target);
        selected = e.target;
        e.srcElement.classList.add('borda-pontilhada')

    });
    list.addEventListener("dragend", (e) => {
        selected = e.target
        e.srcElement.classList.remove('borda-pontilhada')
    });

}

for(list of lists) {
    console.log(list);

    list.addEventListener("dragstart", (e) => {
        // console.log("dragstart", e.target);
        selected = e.target;
    });
    caixaEsquerda.addEventListener("dragover", (e) => {
        // console.log("dragover", e.target);
        e.preventDefault();
    });
    caixaEsquerda.addEventListener("drop", (e) => {
        caixaEsquerda.appendChild(selected);
        selected = null;

        e.stopImmediatePropagation();
    });
    list.addEventListener("dragstart", (e) => {
        // console.log("dragstart", e.target);
        selected = e.target;
        e.srcElement.classList.add('borda-pontilhada')

    });
    list.addEventListener("dragend", (e) => {
        selected = e.target
        e.srcElement.classList.remove('borda-pontilhada')
    });

}
