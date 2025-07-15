import {pessoas}from './funcionarios.js';
const input = document.getElementById('input-nome');
const resultado = document.getElementById('resultado');

console.log(pessoas)

input.addEventListener('input', () => {
    const termo = input.value.trim().toLowerCase();

    if (termo === "") {
        resultado.innerHTML = "";
        return;
    }

    const pessoasFiltradas =pessoas.filter(p =>
        p.nome.toLowerCase().includes(termo)
    );

    let resultadoPessoa = pessoasFiltradas[0]

    if (resultadoPessoa) {
        const idade = new Date().getFullYear() - new Date(resultadoPessoa.dtNascimento).getFullYear();
        resultado.className = "sucesso";
        resultado.innerHTML = `
          👤 <strong>${resultadoPessoa.nome}</strong><br>
          Sexo: <strong>${resultadoPessoa.sexo}</strong><br>
          Data de Nascimento: <strong>${new Date(resultadoPessoa.dtNascimento).toLocaleDateString('pt-BR')}</strong> (${idade} anos)<br>
          Escolaridade: <strong>${resultadoPessoa.grauEscolaridade}</strong><br>
          Endereço: <strong>${resultadoPessoa.endereco}</strong><br>
          <img src="${resultadoPessoa.foto}" alt="Foto de ${resultadoPessoa.nome}" />
        `;
    } else {
        resultado.className = "erro";
        resultado.textContent = "❌ Nenhuma pessoa encontrada com esse nome.";
    }
});