window.addEventListener('load', () => {
    console.log('evento: load');

    const btEstado = document.getElementById('btnEstado');
    const splatitude = document.getElementById('splatitude');
    const splongitude = document.getElementById('splongitude');
    const spPais = document.getElementById('sppais');
    const spEstado = document.getElementById('spEstado');
    const spCidade = document.getElementById('spCidade');

    btEstado.addEventListener('click', () => {
        console.log('evento: click');
        encontreEstado();
    })

    function encontreEstado() {
        console.log('funcao: encotre estado');
        navigator.geolocation.getCurrentPosition(
            (posicao) => {
                console.log(posicao);
                let lat = posicao.coords.latitude;
                let long = posicao.coords.longitude;

                splatitude.innerText = lat;
                splongitude.innerText = long;

                const chave = 'pk.932dbe29ccb38c914434ab64544e8009';
                const url = `https://us1.locationiq.com/v1/reverse?key=${chave}&lat=${lat}&lon=${long}&format=json`;

                fetch(url)
                    .then(response => response.json())
                    .then(dados => {
                        console.log(dados)
                        let estado = dados.address.state;
                        let cidade = dados.address.city;
                        let pais = dados.address.country;
                        let cep = dados.address.postcode;

                        spCidade.innerText = cidade;
                        spEstado.innerText = estado;
                        spPais.innerText = pais;
                        spCep.innerText = cep;
                    });

            }, //o que contece se ocorrer sucesso na definição da posição
            (erro) => {
                console.log(erro);
            }) //o que acontece se houver erro na definição da posição
    }
})