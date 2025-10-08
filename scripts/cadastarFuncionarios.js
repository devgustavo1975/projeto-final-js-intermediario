function cadastrarFuncionarios() {
    let nome = document.getElementById('nome').value
    let sobrenome = document.getElementById('sobrenome').value
    let dtNascimento = document.getElementById('dtNascimento').value
    let sexo = document.getElementById('sexo').value
    let grauEscolaridade = document.getElementById('grauEscolaridade').value
    let endereco = document.getElementById('endereco').value
    let optouVT = document.getElementById('optouVT').value
    let salarioAtual = document.getElementById('salarioAtual').value
    let valorPassagem = document.getElementById('valorPassagem').value

    // REGEX
    const regexNome = /^[A-Za-zÀ-ÿ\s]+$/
    const regexCargo = /^[A-Za-zÀ-ÿ0-9\s]+$/

    // VALIDAÇÃO
    if(!nome || !regexNome.test(nome)){
        alert('FAVOR PREENCHER O CAMPO NOME COM LETRAS APENAS!')
        return
    }

    if(!sobrenome || !regexNome.test(sobrenome)){
        alert('FAVOR PREENCHER O CAMPO SOBRENOME COM LETRAS APENAS!')
        return
    }

    if(!dtNascimento){
        alert('FAVOR PREENCHER O CAMPO DATA DE NASCIMENTO!')
        return
    }

    if(!sexo){
        alert('FAVOR PREENCHER O CAMPO SEXO!')
        return
    }

    if(!grauEscolaridade){
        alert('FAVOR PREENCHER O CAMPO GRAU DE ESCOLARIDADE!')
        return
    }

    if(!endereco){
        alert('FAVOR PREENCHER O CAMPO ENDEREÇO!')
        return
    }

    if(!optouVT){
        alert('FAVOR PREENCHER O CAMPO OPTOU VT!')
        return
    }

    if(!salarioAtual){
        alert('FAVOR PREENCHER O CAMPO SALÁRIO ATUAL!')
        return
    }

    if(!valorPassagem){
        alert('FAVOR PREENCHER O CAMPO VALOR DA PASSAGEM!')
        return
    }

    // Exemplo de cargo vindo de outro campo ou digitado
    let cargo = "Desenvolvedora Senior"
    if(!regexCargo.test(cargo)){
        alert('O CAMPO CARGO DEVE CONTER APENAS LETRAS E NÚMEROS!')
        return
    }

    // Envio dos dados
    fetch('https://node-vercel-app-rho.vercel.app/api/funcionarios', {
        method: "POST",
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
                "salarioAtual": salarioAtual,
                "valorPassagem": valorPassagem,
                "optouVT": optouVT,
                "historicoCargosESalarios": [
                    {
                        "cargo": cargo,
                        "salario": 5000,
                        "dataInicio": "2021-01-01",
                        "dataFim": "null"
                    }
                ]
            }
        )
    })
    .then(resp => resp.json())
    .then(dados => console.log(dados))
    .catch(err => console.error("Erro na requisição:", err));
}


