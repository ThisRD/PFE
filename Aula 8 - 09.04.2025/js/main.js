const exampleCep = document.querySelector('#exampleCep')
const spnRegiao = document.querySelector('#spnRegiao')
const spnEstado = document.querySelector('#spnEstado')
const spnUf = document.querySelector('#spnUf')
const spnCidade = document.querySelector('#spnCidade')
const spnBairro = document.querySelector('#spnBairro')
const spnRua = document.querySelector('#spnRua')
const spnDdd = document.querySelector('#spnDdd')
const btnConsulta = document.querySelector('#btnConsulta')

btnConsulta.addEventListener('click', () => {
    console.log('Consumindo API')

    const cep = exampleCep.value
    

    const url = `https://viacep.com.br/ws/${cep}/json/`

    dados = fetch(url).then((response) => { return response.json() })
    .then((dados) => {
        (console.log(dados))

        let regiao = dados.regiao;
        let estado = dados.estado;
        let uf = dados.uf;
        let cidade = dados.localidade;
        let bairro = dados.bairro;
        let rua = dados.logradouro;
        let ddd = dados.ddd;
        console.log(bairro)

        spnRegiao.innerText = regiao;
        spnEstado.innerText = estado;
        spnUf.innerText = uf;
        spnCidade.innerText = cidade;
        spnBairro.innerText = bairro;
        spnRua.innerText = rua;
        spnDdd.innerText = ddd;
    }).catch((error)=> {
        console.log(error)
    }) 
})

