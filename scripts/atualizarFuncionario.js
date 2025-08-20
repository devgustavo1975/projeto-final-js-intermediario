import { pessoas } from './funcionarios.js';

const idUsuario = Number(window.location.search.split("?")[1])
const textoId = document.getElementById('id-user').innerHTML = `Id do Usuário: ${idUsuario}`
const pessoaEncontrada = pessoas.filter((pessoa) => pessoa.id === idUsuario)[0]

let nome = document.getElementById('nome').value
let sobrenome = document.getElementById('sobrenome').value
let dtNascimento = document.getElementById('dtNascimento').value
let sexo = document.getElementById('sexo').value
let grauEscolaridade = document.getElementById('grauEscolaridade').value
let endereco = document.getElementById('endereco').value
let optouVT = document.getElementById('optouVT').value
let salarioAtual = document.getElementById('salarioAtual').value
let valorPassagem = document.getElementById('valorPassagem').value

if(pessoaEncontrada){
    //document.getElementById('fotoFuncionario').src = pessoaEncontrada.foto
    document.getElementById('nome').value = pessoaEncontrada.nome
    document.getElementById('sobrenome').value = pessoaEncontrada.sobrenome
    document.getElementById('dtNascimento').value = pessoaEncontrada.dtNascimento
    document.getElementById('sexo').value = pessoaEncontrada.sexo
    document.getElementById('grauEscolaridade').value = pessoaEncontrada.grauEscolaridade
    document.getElementById('endereco').value = pessoaEncontrada.endereco
    document.getElementById('optouVT').value = pessoaEncontrada.optouVT
    document.getElementById('salarioAtual').value = pessoaEncontrada.salarioAtual
    document.getElementById('valorPassagem').value = pessoaEncontrada.valorPassagem

}

console.log(nome);
