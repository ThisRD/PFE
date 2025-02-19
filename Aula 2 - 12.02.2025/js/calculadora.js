function clearCalculator() {
    document.getElementById('result').value = '';
}

function add(val) {
    document.getElementById('result').value += val;
}

function calculate() {
    let resultado = eval(document.getElementById('result').value);
    document.getElementById('result').value = resultado;

}
