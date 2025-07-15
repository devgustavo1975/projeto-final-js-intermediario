import { pessoas } from './funcionarios.js';
// Função auxiliar para gerar número aleatório
function gerarNumeroAleatorio(min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

// Adiciona salário, passagemDiaria e opcaoVT a cada pessoa
pessoas.forEach(pessoa => {
    pessoa.salario = gerarNumeroAleatorio(1500, 6000);
    pessoa.passagemDiaria = gerarNumeroAleatorio(8, 25);
    pessoa.opcaoVT = Math.random() < 0.5; // true ou false
});

const input = document.getElementById('input-nome');
const resultado = document.getElementById('resultado');

input.addEventListener('input', () => {
    const termo = input.value.trim().toLowerCase();

    if (termo === "") {
        resultado.innerHTML = "";
        return;
    }

    const pessoasFiltradas = pessoas.filter(p =>
        p.nome.toLowerCase().includes(termo)
    );

    let resultadoPessoa = pessoasFiltradas[0];

    if (resultadoPessoa) {
        const idade = new Date().getFullYear() - new Date(resultadoPessoa.dtNascimento).getFullYear();
        resultado.className = "sucesso";

        let vtDescontoHTML = "";
        if (resultadoPessoa.opcaoVT) {
            const descontoVT = calcularDescontoVT(resultadoPessoa.salario);
            vtDescontoHTML = `
                    <br><strong>💳 Optou pelo VT:</strong> Sim<br>
                    Desconto de 6%: <strong>R$ ${descontoVT.toFixed(2)}</strong>
                `;
        } else {
            vtDescontoHTML = `<br><strong>💳 Optou pelo VT:</strong> Não`;
        }

        resultado.innerHTML = `
                👤 <strong>${resultadoPessoa.nome}</strong><br>
                Sexo: <strong>${resultadoPessoa.sexo}</strong><br>
                Data de Nascimento: <strong>${new Date(resultadoPessoa.dtNascimento).toLocaleDateString('pt-BR')}</strong> (${idade} anos)<br>
                Escolaridade: <strong>${resultadoPessoa.grauEscolaridade}</strong><br>
                Endereço: <strong>${resultadoPessoa.endereco}</strong><br>
                Salário: <strong>R$ ${resultadoPessoa.salario.toFixed(2)}</strong><br>
                Passagem Diária: <strong>R$ ${resultadoPessoa.passagemDiaria.toFixed(2)}</strong>
                ${vtDescontoHTML}
                <br><img src="${resultadoPessoa.foto}" alt="Foto de ${resultadoPessoa.nome}" />
            `;
    } else {
        resultado.className = "erro";
        resultado.textContent = "❌ Nenhuma pessoa encontrada com esse nome.";
    }
});

// Função que calcula desconto do vale-transporte
function calcularDescontoVT(salario) {
    return salario * 0.06;
}