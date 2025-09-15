function carregarListaFuncionarios() {
    let listaDeFuncionarios = []
    fetch('https://node-vercel-app-rho.vercel.app/api/funcionarios', {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
        .then(resp => resp.json())
        .then(dados => {
            listaDeFuncionarios = dados
            carregarDados(listaDeFuncionarios)
        })
        .catch(err => console.error("Erro na requisição:", err));

}

function carregarDados(dados){
const container = document.getElementById('listaFuncionarios');

dados.forEach((pessoa, index) => {
  console.log(pessoa.funcionario.nome)
  const card = document.createElement('div');
  card.className = 'col-md-4 mb-4';
  card.innerHTML = `
        <div class="card h-100 shadow" id="${index + 1}">
          <img src="${pessoa.foto}" class="card-img-top" alt="${pessoa.funcionario.nome}">
          <div class="card-body link-card">
            <h5 class="card-title">${pessoa.funcionario.nome}</h5>
            <p class="card-text"><strong>Data de Nascimento:</strong> ${new Date(pessoa.funcionario.dtNascimento).toLocaleDateString('pt-BR')}</p>
            <p class="card-text"><strong>Sexo:</strong> ${pessoa.funcionario.sexo}</p>
            <p class="card-text"><strong>Escolaridade:</strong> ${pessoa.funcionario.grauEscolaridade}</p>
            <p class="card-text"><strong>Endereço:</strong> ${pessoa.funcionario.endereco}</p>
          </div>
        </div>
      `;
  container.appendChild(card);
});

container.addEventListener('click', function (event) {
  const card = event.target.closest('.card');
  console.log(card.id.toString());
  window.location.href = `atualizarFuncionario.html?${card.id}`;
});
}
