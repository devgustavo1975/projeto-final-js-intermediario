let idUsuario = 10;

function carregarListaFuncionarios() {
    let listaDeFuncionarios = [];
    fetch('https://node-vercel-app-rho.vercel.app/api/funcionarios', {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
        .then(resp => resp.json())
        .then(dados => {
            listaDeFuncionarios = dados;
            carregarDados(listaDeFuncionarios);
        })
        .catch(err => console.error("Erro na requisição:", err));
}

function carregarDados(dados) {
    const container = document.getElementById('listaFuncionarios');
    container.innerHTML = ''; 

    dados.forEach((pessoa) => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';

        card.innerHTML = `
            <div class="card h-100 shadow link-card" id="${pessoa._id}" style="cursor:pointer">
              <img src="${pessoa.funcionario.foto}" class="card-img-top" alt="${pessoa.funcionario.nome}">
              <div class="card-body">
                <h5 class="card-title">${pessoa.funcionario.nome}</h5>
                <p class="card-text"><strong>Data de Nascimento:</strong> ${new Date(pessoa.funcionario.dtNascimento).toLocaleDateString('pt-BR')}</p>
                <p class="card-text"><strong>Sexo:</strong> ${pessoa.funcionario.sexo}</p>
                <p class="card-text"><strong>Escolaridade:</strong> ${pessoa.funcionario.grauEscolaridade}</p>
                <p class="card-text"><strong>Endereço:</strong> ${pessoa.funcionario.endereco}</p>
              </div>
            </div>
        `;

        card.querySelector('.card').addEventListener('click', () => {
            sessionStorage.setItem('idFuncionario', pessoa._id);
            window.location.href = `atualizarFuncionario.html?${pessoa._id}`;
        });

        container.appendChild(card);
    });
}
