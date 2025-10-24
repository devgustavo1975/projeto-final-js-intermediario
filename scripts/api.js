(function () {
    carregarGET()
})();

function carregarGET() {
    fetch('https://node-vercel-app-rho.vercel.app/api/funcionarios', {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
        .then(resp => resp.json())
        .then(dados => console.log(dados))
        .catch(err => console.error("Erro na requisição:", err));
}

function carregarPOST() {
    fetch('https://node-vercel-app-rho.vercel.app/api/funcionarios', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
            {
                "funcionario": {
                    "nome": "Maria",
                    "sobrenome": "da Silva",
                    "sexo": "Feminino",
                    "dtNascimento": "1990-03-29",
                    "grauEscolaridade": "Ensino Superior Completo",
                    "endereco": "Rua das Flores, 123",
                    "foto": "img/ana clara.png",
                    "salarioAtual": 5000.00,
                    "valorPassagem": 22.00,
                    "opcaoVT": true,
                    "historicoCargosESalarios": [
                        {
                            "cargo": "Desenvolvedora Senior",
                            "salario": 5000,
                            "dataInicio": "2021-01-01",
                            "dataFim": "null"
                        }
                    ]
                }
            }
        )
    })
        .then(resp => resp.json())
        .then(dados => console.log(dados))
        .catch(err => console.error("Erro na requisição:", err));
}

const botao = document.getElementById("botaoCadastro");

botao.addEventListener("click", () => {
    carregarPOST();
});
