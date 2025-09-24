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
    console.log(funcionario);
    
    document.getElementById('fotoFuncionario').src = funcionario.funcionario.foto
    document.getElementById('id-user').innerHTML = `Id do usuário: ${funcionario._id}`
    document.getElementById('nome').value = funcionario.funcionario.nome
    document.getElementById('sobrenome').value = funcionario.funcionario.sobrenome
    document.getElementById('dtNascimento').value = funcionario.funcionario.dtNascimento
    document.getElementById('sexo').value = funcionario.funcionario.sexo
    document.getElementById('grauEscolaridade').value = funcionario.funcionario.grauEscolaridade.toLocaleLowerCase();
    document.getElementById('endereco').value = funcionario.funcionario.endereco
    document.getElementById('optouVT').value = funcionario.funcionario.optouVT
    document.getElementById('salarioAtual').value = funcionario.funcionario.salarioAtual
    document.getElementById('valorPassagem').value = funcionario.funcionario.valorPassagem
}