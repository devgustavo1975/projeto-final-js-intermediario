 import { pessoas } from './funcionarios.js';

const container = document.getElementById('listaFuncionarios');

pessoas.forEach(pessoa, index => {
  const card = document.createElement('div');
  card.className = 'col-md-4 mb-4';
  card.innerHTML = `
        <div class="card h-100 shadow" id="${index + 1}">
          <img src="${pessoa.foto}" class="card-img-top" alt="${pessoa.nome}">
          <div class="card-body link-card">
            <h5 class="card-title">${pessoa.nome}</h5>
            <p class="card-text"><strong>Data de Nascimento:</strong> ${new Date(pessoa.dtNascimento).toLocaleDateString('pt-BR')}</p>
            <p class="card-text"><strong>Sexo:</strong> ${pessoa.sexo}</p>
            <p class="card-text"><strong>Escolaridade:</strong> ${pessoa.grauEscolaridade}</p>
            <p class="card-text"><strong>Endereço:</strong> ${pessoa.endereco}</p>
          </div>
        </div>
      `;
  container.appendChild(card);
});

container.addEventListener('click', function (event) {
  const card = event.target.closest('.card');
  console.log(card.id.toString());
  //window.location.href = `atualizarFuncionario.html/${card.id}`;
});
