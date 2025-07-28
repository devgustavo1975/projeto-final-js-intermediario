import { pessoas } from './funcionarios.js';
document.getElementById('form-funcionario').addEventListener('submit', function (event) {
    event.preventDefault();

    // Coleta dos dados
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const nascimento = document.getElementById('nascimento').value;
    const sexo = document.getElementById('sexo').value;
    const escolaridade = document.getElementById('escolaridade').value;
    const endereco = document.getElementById('endereco').value;
    const salario = parseFloat(document.getElementById('salario').value);
    const passagem = parseFloat(document.getElementById('valor-passagem').value);
    const vt = document.querySelector('input[name="opcaoVT"]:checked').value;
    pessoas.push({
        nome: nome,
        sobrenome: sobrenome,
        dtNascimento: nascimento,
        sexo: sexo,
        grauEscolaridade: escolaridade,
        endereco: endereco,
        salario: salario,
        passagemDiaria: passagem,
        opcaoVT: vt === "sim"
    });

    // Preenche os campos de exibição
    document.getElementById('res-nome').textContent = `${nome} ${sobrenome}`;
    document.getElementById('res-nascimento').textContent = nascimento;
    document.getElementById('res-sexo').textContent = sexo;
    document.getElementById('res-escolaridade').textContent = escolaridade;
    document.getElementById('res-endereco').textContent = endereco;
    document.getElementById('res-salario').textContent = salario.toFixed(2);
    document.getElementById('res-passagem').textContent = passagem.toFixed(2);
    document.getElementById('res-vt').textContent = vt.toUpperCase();

    // Limpa o formulário
    document.getElementById('form-funcionario').reset();
});