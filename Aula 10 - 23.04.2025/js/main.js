const btnEstado = document.querySelector("#btnEstado");
const tabela = document.querySelector(".table");
const btnConsulta = document.querySelector("#btnConsulta");
const btnLimpar = document.querySelector("#btnLimpar");
const btnGerar = document.querySelector("#btnGerar"); // Botão para gerar PDF


btnGerar.addEventListener("click", () => {
    const { jsPDF } = window.jspdf; // Acessa o objeto global jsPDF
    const doc = new jsPDF();

    // Adiciona título ao PDF
    doc.setFontSize(18);
    doc.text("Relatório de Produtos", 10, 10);

    // Captura os dados da tabela
    const tabela = document.querySelector("table");
    const linhas = tabela.querySelectorAll("tbody tr");
    const rodape = tabela.querySelector("tfoot tr");

    // Configura os dados para o autoTable
    const colunas = [
        "ID",
        "PRODUTO",
        "IMAGEM",
        "PREÇO",
        "CATEGORIA",
        "AVALIAÇÃO",
        "ESTOQUE",
        "TOTAL"
    ];

    const dados = Array.from(linhas).map((linha) => {
        const colunas = linha.querySelectorAll("td");
        return Array.from(colunas).map((coluna, index) => {
            if (index === 2) {
                // Para a coluna de imagem
                const img = coluna.querySelector("img");
                return img ? { content: "", image: img.src } : "";
            }
            return coluna.innerText;
        });
    });

    // Adiciona o rodapé (soma total)
    if (rodape) {
        const rodapeDados = Array.from(rodape.querySelectorAll("td")).map((coluna) => coluna.innerText);
        dados.push(rodapeDados);
    }

    // Gera a tabela no PDF
    doc.autoTable({
        head: [colunas],
        body: dados,
        didDrawCell: (data) => {
            if (data.column.index === 2 && data.cell.raw && data.cell.raw.image) {
                // Renderiza a imagem na célula
                const imgProps = doc.getImageProperties(data.cell.raw.image);
                const cellWidth = data.cell.width;
                const cellHeight = data.cell.height;
                const ratio = Math.min(cellWidth / imgProps.width, cellHeight / imgProps.height);
                const imgWidth = imgProps.width * ratio;
                const imgHeight = imgProps.height * ratio;
                const xOffset = data.cell.x + (cellWidth - imgWidth) / 2;
                const yOffset = data.cell.y + (cellHeight - imgHeight) / 2;
                doc.addImage(data.cell.raw.image, "JPEG", xOffset, yOffset, imgWidth, imgHeight);
            }
        },
        startY: 20, // Posição inicial da tabela
    });

    // Salva o PDF
    doc.save("relatorio_produtos.pdf");
});

const url = 'https://fakestoreapi.com/products';

fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
        const tbody = document.querySelector("tbody");
            const tfoot = document.querySelector("tfoot");
            tbody.innerHTML = ""; // Limpa o conteúdo atual do tbody
            tfoot.innerHTML = ""; // Limpa o conteúdo atual do tfoot
            let somaTotal = 0; // Inicializa a soma total


        // Exibe os produtos filtrados
        data.slice(0, 10).forEach((item) => {
            const estoqueInicial = 1; // Define o valor inicial do estoque
            let estoqueAtual = estoqueInicial; // Cria uma cópia para manipulação
            let valortotal = item.price * estoqueAtual; // Calcula o valor total do estoque
            let imagem = item.image; // Obtém a imagem do produto

            somaTotal += valortotal; // Adiciona o valor total do produto à soma total

            const tr = document.createElement("tr");
            tr.innerHTML = `
                    <td>${item.id}</td>
                    <td>${item.title}</td>
                    <td><img src="${imagem}" alt="${item.image}" style="width:50px; height:50px"></td>
                    <td>R$${item.price.toFixed(2)}</td>
                    <td>${item.category}</td>
                    <td>${item.rating.rate}</td>
                    <td>
                        <span class="estoque">${estoqueAtual}</span>
                    </td>
                    <td>R$${valortotal.toFixed(2)}</td>

                `;
            tbody.appendChild(tr);


        });
        const trFooter = document.createElement("tr");
        trFooter.innerHTML = `
                <td colspan="7" style="text-align: right; font-weight: bold;">Total Geral:</td>
                <td>R$${somaTotal.toFixed(2)}</td>
            `;
        tfoot.appendChild(trFooter);
    })
    .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
    });


btnEstado.addEventListener("click", () => {
    console.log('btn Consulta');

    if (tabela) {
        // tabela.classList.remove("invisible")
        // btnConsulta.classList.add("invisible")
    }

    const url = 'https://fakestoreapi.com/products';
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            const tbody = document.querySelector("tbody");
            const tfoot = document.querySelector("tfoot");
            tbody.innerHTML = ""; // Limpa o conteúdo atual do tbody
            tfoot.innerHTML = ""; // Limpa o conteúdo atual do tfoot
            let somaTotal = 0; // Inicializa a soma total
            // Obtém os valores do filtro
            const inicio = parseInt(inicioFilter.value) || 0;
            const fim = parseInt(fimFilter.value) || Number.MAX_SAFE_INTEGER;

            // Filtra os produtos com base no intervalo de IDs
            const produtosFiltrados = data.filter(item => item.id >= inicio && item.id <= fim);

            // Exibe os produtos filtrados
            produtosFiltrados.slice(0, 10).forEach((item) => {
                const estoqueInicial = 1; // Define o valor inicial do estoque
                let estoqueAtual = estoqueInicial; // Cria uma cópia para manipulação
                let valortotal = item.price * estoqueAtual; // Calcula o valor total do estoque
                let imagem = item.image; // Obtém a imagem do produto

                somaTotal += valortotal; // Adiciona o valor total do produto à soma total

                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td>${item.id}</td>
                    <td>${item.title}</td>
                    <td><img src="${imagem}" alt="${item.image}" style="width:50px; height:50px"></td>
                    <td>R$${item.price.toFixed(2)}</td>
                    <td>${item.category}</td>
                    <td>${item.rating.rate}</td>
                    <td>
                        <span class="estoque">${estoqueAtual}</span>
                    </td>
                    <td>R$${valortotal.toFixed(2)}</td>

                `;
                tbody.appendChild(tr);

            });
            const trFooter = document.createElement("tr");
            trFooter.innerHTML = `
                <td colspan="7" style="text-align: right; font-weight: bold;">Total Geral:</td>
                <td>R$${somaTotal.toFixed(2)}</td>
            `;
            tfoot.appendChild(trFooter);
        })
        .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
        });

})

btnLimpar.addEventListener("click", () => {
    inicioFilter.value = ""; // Limpa o campo de início
    fimFilter.value = ""; // Limpa o campo de fim

    const url = 'https://fakestoreapi.com/products';
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then((data) => {
            const tbody = document.querySelector("tbody");
            const tfoot = document.querySelector("tfoot");
            tbody.innerHTML = ""; // Limpa o conteúdo atual do tbody
            tfoot.innerHTML = ""; // Limpa o conteúdo atual do tfoot
            let somaTotal = 0; // Inicializa a soma total


            // Exibe todos os produtos (limpa o filtro)
            data.slice(0, 10).forEach((item) => {
                const estoqueInicial = 1; // Define o valor inicial do estoque
                let estoqueAtual = estoqueInicial; // Cria uma cópia para manipulação
                let valortotal = item.price * estoqueAtual; // Calcula o valor total do estoque
                let imagem = item.image; // Obtém a imagem do produto
                somaTotal += valortotal; // Adiciona o valor total do produto à soma total



                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td>${item.id}</td>
                    <td>${item.title}</td>
                    <td><img src="${imagem}" alt="${item.image}" style="width:50px; height:50px"></td>
                    <td>R$${item.price.toFixed(2)}</td>
                    <td>${item.category}</td>
                    <td>${item.rating.rate}</td>
                    <td>
                        <span class="estoque">${estoqueAtual}</span>
                    </td>
                    <td>R$${valortotal.toFixed(2)}</td>
                `;
                tbody.appendChild(tr);
            });
            const trFooter = document.createElement("tr");
            trFooter.innerHTML = `
                <td colspan="7" style="text-align: right; font-weight: bold;">Total Geral:</td>
                <td>R$${somaTotal.toFixed(2)}</td>
            `;
            tfoot.appendChild(trFooter);
        })
        .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
        });
});