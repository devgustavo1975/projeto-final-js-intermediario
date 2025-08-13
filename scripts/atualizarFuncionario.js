import { pessoas } from './funcionarios.js';

const form = document.getElementById('formFuncionario');
const mensagem = document.getElementById('mensagem');
const foto = document.getElementById('fotoFuncionario');

// PEGAR ID DA URL
// Exemplo: ?id=3 → pegar apenas o número
const params = new URLSearchParams(window.location.search);
const idUsuarioUrl = params.get('id'); // Isso retorna "3" (string) se ?id=3

// Mostra o ID na página
document.getElementById('id-user').innerText = `Id do usuário: ${idUsuarioUrl}`;

// CONVERTE PARA NÚMERO
const idNumero = parseInt(idUsuarioUrl);

// Carregar opções no select
pessoas.forEach((pessoa, index) => {
    const opt = document.createElement('option');
    opt.value = index;
    opt.textContent = `${pessoa.nome} ${pessoa.sobrenome}`;
    selectFuncionario.appendChild(opt);
});

// Tenta encontrar a pessoa com esse ID
const pessoaPorId = pessoas.find((p) => p.id === idNumero);

if (pessoaPorId) {
    const indexPessoa = pessoas.indexOf(pessoaPorId);
    preencherFormulario(indexPessoa);
    selectFuncionario.value = indexPessoa;
    mensagem.textContent = "Funcionário carregado com sucesso.";
} else {
    preencherFormulario(0);
    selectFuncionario.value = 0;
    mensagem.textContent = "ID não encontrado. Primeiro funcionário carregado.";
}

// Função para preencher formulário
function preencherFormulario(index) {
    const p = pessoas[index];
    document.getElementById('nome').value = p.nome;
    document.getElementById('sobrenome').value = p.sobrenome;
    document.getElementById('dtNascimento').value = p.dtNascimento;
    document.getElementById('sexo').value = p.sexo;
    document.getElementById('grauEscolaridade').value = p.grauEscolaridade;
    document.getElementById('endereco').value = p.endereco;
    document.getElementById('optouVT').value = p.optouVT.toString();
    document.getElementById('salarioAtual').value = p.salarioAtual;
    document.getElementById('valorPassagem').value = p.valorPassagem;
    foto.src = p.foto; // Aqui a foto é atualizada conforme o funcionário
}

// Inicial
preencherFormulario(0);

// Atualiza formulário ao mudar select
selectFuncionario.addEventListener('change', (e) => {
    preencherFormulario(e.target.value);
    mensagem.textContent = "";
});

// Atualiza os dados no array ao enviar
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const index = selectFuncionario.value;
    const p = pessoas[index];
    p.nome = document.getElementById('nome').value;
    p.sobrenome = document.getElementById('sobrenome').value;
    p.dtNascimento = document.getElementById('dtNascimento').value;
    p.sexo = document.getElementById('sexo').value;
    p.grauEscolaridade = document.getElementById('grauEscolaridade').value;
    p.endereco = document.getElementById('endereco').value;
    p.optouVT = document.getElementById('optouVT').value === "true";
    p.salarioAtual = parseFloat(document.getElementById('salarioAtual').value);
    p.valorPassagem = parseFloat(document.getElementById('valorPassagem').value);
    mensagem.textContent = "Dados atualizados com sucesso!";
});
