import { pessoas } from './funcionarios.js';

const idUsuario = Number(window.location.search.split("?")[1])
const textoId = document.getElementById('id-user').innerHTML = `Id do Usuário: ${idUsuario}`
const pessoaEncontrada = pessoas.filter((pessoa) => pessoa.id === idUsuario)[0]

document.getElementById('fotoFuncionario').src = pessoaEncontrada.foto
document.getElementById('nome').value = pessoaEncontrada.nome
document.getElementById('sobrenome').value = pessoaEncontrada.sobrenome
document.getElementById('dtNascimento').value = pessoaEncontrada.dtNascimento
document.getElementById('sexo').value = pessoaEncontrada.sexo
document.getElementById('grauEscolaridade').value = pessoaEncontrada.grauEscolaridade
document.getElementById('endereco').value = pessoaEncontrada.endereco
document.getElementById('optouVT').value = pessoaEncontrada.optouVT
document.getElementById('salarioAtual').value = pessoaEncontrada.salarioAtual
document.getElementById('valorPassagem').value = pessoaEncontrada.valorPassagem
