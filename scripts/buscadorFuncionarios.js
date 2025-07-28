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
        document.getElementById("valor-vt-func").textContent = "";
        document.getElementById("valor-vt-empresa").textContent = "";
        document.getElementById("valor-fgts").textContent = "";
        return;
    }

    const pessoasFiltradas = pessoas.filter(p =>
        p.nome.toLowerCase().includes(termo)
    );

    const resultadoPessoa = pessoasFiltradas[0];

    if (resultadoPessoa) {
        const idade = new Date().getFullYear() - new Date(resultadoPessoa.dtNascimento).getFullYear();
        resultado.className = "sucesso";

        // Cálculos
        const salario = resultadoPessoa.salario;
        const passagemDiaria = resultadoPessoa.passagemDiaria;
        const valorTotalPassagem = calcularVTempresa(passagemDiaria);
        const valor6porcento = calcularDescontoVT(salario);
        const valorFGTS = calcularFGTS(salario);

        let valorDescontoVT = 0;
        let valorVTempresa = 0;

        if (resultadoPessoa.opcaoVT) {
            if (valorTotalPassagem <= valor6porcento) {
                valorDescontoVT = valorTotalPassagem;
                valorVTempresa = 0;
            } else {
                valorDescontoVT = valor6porcento;
                valorVTempresa = valorTotalPassagem - valor6porcento;
            }
        }

        const novaPessoa = {
            nome: `${nome} ${sobrenome}`,
            dtNascimento: nascimento,
            sexo: sexo,
            grauEscolaridade: escolaridade,
            endereco: endereco,
            salario: salario,
            passagemDiaria: passagem,
            opcaoVT: vt.toLowerCase() === 'sim',
            foto: gerarFotoAleatoria(sexo)
        };

        // Agora você pode adicionar com a função
        adicionarPessoa(novaPessoa);

        console.log('Pessoa cadastrada:', novaPessoa);

        // Atualiza o HTML principal da pessoa
        resultado.innerHTML = `
        👤 <strong>${resultadoPessoa.nome}</strong><br>
        Sexo: <strong>${resultadoPessoa.sexo}</strong><br>
        Data de Nascimento: <strong>${new Date(resultadoPessoa.dtNascimento).toLocaleDateString('pt-BR')}</strong> (${idade} anos)<br>
        Escolaridade: <strong>${resultadoPessoa.grauEscolaridade}</strong><br>
        Endereço: <strong>${resultadoPessoa.endereco}</strong><br>
        Salário: <strong>R$ ${salario.toFixed(2)}</strong><br>
        📦 FGTS (8%): <strong><span class="verde">R$ ${valorFGTS.toFixed(2)}</span></strong><br>
        Passagem Diária: <strong>R$ ${passagemDiaria.toFixed(2)}</strong><br>
        Optou pelo VT: <strong>${resultadoPessoa.opcaoVT ? "Sim" : "Não"}</strong><br>
        <img src="${resultadoPessoa.foto}" alt="Foto de ${resultadoPessoa.nome}" />
    `;

        // Atualiza os valores separados
        document.getElementById("valor-vt-func").textContent = resultadoPessoa.opcaoVT
            ? `R$ ${valorDescontoVT.toFixed(2)}`
            : "R$ 0,00";

        document.getElementById("valor-vt-empresa").textContent = resultadoPessoa.opcaoVT
            ? `R$ ${valorVTempresa.toFixed(2)}`
            : "R$ 0,00";

        document.getElementById("valor-fgts").textContent = `R$ ${valorFGTS.toFixed(2)}`;

    } else {
        resultado.className = "erro";
        resultado.textContent = "❌ Nenhuma pessoa encontrada com esse nome.";

        // Limpa os campos
        document.getElementById("valor-vt-func").textContent = "";
        document.getElementById("valor-vt-empresa").textContent = "";
        document.getElementById("valor-fgts").textContent = "";
    }
});

// Função que calcula desconto do vale-transporte
function calcularDescontoVT(salario) {
    return salario * 0.06;
}

function calcularVTempresa(passagemDiaria) {
    return passagemDiaria * 22; // 22 dias úteis
}

function calcularFGTS(salario) {
    return salario * 0.08;
}
