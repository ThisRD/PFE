window.addEventListener('load', () => {
    console.log('evento: load');

    const btEstado = document.getElementById('btnEstado');
    const splatitude = document.getElementById('splatitude');
    const splongitude = document.getElementById('splongitude');
    const latitude = document.getElementById('latitude');
    const longitude = document.getElementById('longitude');
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
                
                let lat = latitude.value;
                let long = longitude.value;
                
                splatitude.innerText = lat;
                splongitude.innerText = long;
                
                const chave = 'pk.8e939ad451162853fdc9544504a572b7';
                const url = `https://us1.locationiq.com/v1/reverse?key=${chave}&lat=${lat}&lon=${long}&format=json`;
                // const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&amp;longitude=${long}&amp;localityLanguage=pt-BR&quot;`
                
                fetch(url)
                    .then(response => response.json())
                    .then(dados => {
                        console.log(dados)

                        let estado = dados.address.state;
                        let cidade = dados.address.city;
                        let pais = dados.address.country;
                        let cep = dados.address.postcode;
                        
                        // let estado = dados.localityInfo.administrative[2].name;
                        // let estado = dados.principalSubdivision; 
                        // let cidade = dados.city;
                        // let pais = dados.countryName;
                        // let cep = dados.postcode;

                        spCidade.innerText = cidade;
                        spEstado.innerText = estado;
                        spPais.innerText = pais;
                        spCep.innerText = cep;
                        mostraMapa(lat,long)
                    });

                }, //o que contece se ocorrer sucesso na definição da posição
            (erro) => {
                console.log(erro);
            }) //o que acontece se houver erro na definição da posição
    }
    function mostraMapa(lat, long){
        console.log('mostraMapa', lat, long)
    
        var map = L.map('map').setView([lat, long], 13);
    
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contribuitors'
        }).addTo(map);
    
        L.marker([lat, long]).addTo(map)
            .bindPopup(`<b>Sao Paulo</b> Está é a localização do marcador.`)
            .openPopup();
       
    }

})