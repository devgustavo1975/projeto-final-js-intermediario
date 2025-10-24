(function(){
    carregarDetalhesFuncionario()
})()

let funcionario = {} 

function carregarDetalhesFuncionario() {
const idUsuario = window.location.search.split("?")[1]
fetch(`https://node-vercel-app-rho.vercel.app/api/funcionarios/${idUsuario}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
        .then(resp => resp.json())
        .then(dados => {
            funcionario = dados
            preencherDados(funcionario)
        })
        .catch(err => console.error("Erro na requisição:", err));
}

function preencherDados(funcionario){
    document.getElementById('id-user').innerHTML = `Id do usuário: ${funcionario._id}`
    document.getElementById('nome').value = funcionario.nome
    document.getElementById('foto').src = funcionario.foto
    document.getElementById('sobrenome').value = funcionario.sobrenome
    document.getElementById('dtNascimento').value = funcionario.dtNascimento
    document.getElementById('sexo').value = funcionario.sexo
    document.getElementById('grauEscolaridade').value = funcionario.grauEscolaridade.toLocaleLowerCase();
    document.getElementById('endereco').value = funcionario.endereco
    document.getElementById('optouVT').value = funcionario.optouVT
    document.getElementById('salarioAtual').value = funcionario.salarioAtual
    document.getElementById('valorPassagem').value = funcionario.valorPassagem
}

function alterarFuncionario() {
    let nome = document.getElementById('nome').value
    let foto = document.getElementById('foto').value
    let sobrenome = document.getElementById('sobrenome').value
    let dtNascimento = document.getElementById('dtNascimento').value
    let sexo = document.getElementById('sexo').value
    let grauEscolaridade = document.getElementById('grauEscolaridade').value
    let endereco = document.getElementById('endereco').value
    let optouVT = document.getElementById('optouVT').value
    let salarioAtual = document.getElementById('salarioAtual').value
    let valorPassagem = document.getElementById('valorPassagem').value
    const idUsuario = window.location.search.split("?")[1]

    fetch(`https://node-vercel-app-rho.vercel.app/api/funcionarios/${idUsuario}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
         body: JSON.stringify(
            
                {
                    "nome": `${nome}`,
                    "sobrenome": `${sobrenome}`,
                    "sexo": `${sexo}`,
                    "dtNascimento": `${dtNascimento}`,
                    "grauEscolaridade": `${grauEscolaridade}`,
                    "endereco": `${endereco}`,
                    "foto": "foto",
                    "salarioAtual": Number(salarioAtual),
                    "valorPassagem": Number(valorPassagem),
                    "optouVT": optouVT === "true",
                    "historicoCargosESalarios": [
                        {
                            "cargo": "Desenvolvedora Senior",
                            "salario": 5000,
                            "dataInicio": "2021-01-01",
                            "dataFim": "null"
                        }
                    ]
                
            }

            
        )
    })
        .then(resp => resp.json())
        .then(dados => {
            funcionario = dados
            console.log(funcionario)
        })
        .catch(err => console.error("Erro na requisição:", err));

}