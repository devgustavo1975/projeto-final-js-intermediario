function cadastrarFuncionarios() {
    let nome = document.getElementById('nome').value
    let sobrenome = document.getElementById('sobrenome').value
    let dtNascimento = document.getElementById('dtNascimento').value
    let sexo = document.getElementById('sexo').value
    let grauEscolaridade = document.getElementById('grauEscolaridade').value
    let endereco = document.getElementById('endereco').value
    const optouVTRadio = document.querySelector('input[name="optouVT"]:checked');
    const optouVT = optouVTRadio ? optouVTRadio.value === 'true' : false;
    let valorPassagem = document.getElementById('valorPassagem').value
    let cargo = document.getElementById('cargo').value
    let salario = Number(document.getElementById('salario').value)
    let dataInicio = document.getElementById('dataInicio').value
    let dataDemissao = document.getElementById('dataDemissao').value

    valorPassagem = parseFloat(valorPassagem);

    // if (nome == '' || nome == null || nome == undefined) {
    //     alert('FAVOR PREENCHER O CAMPO NOME!')
    // }
    // if (sobrenome == '' || sobrenome == null || sobrenome == undefined) {
    //     alert('FAVOR PREENCHER O CAMPO SOBRENOME!')
    // }
    // if (dtNascimento == '' || dtNascimento == null || dtNascimento == undefined) {
    //     alert('FAVOR PREENCHER O CAMPO DATA DE NASCIMENTO!')
    // }
    // if (sexo == '' || sexo == null || sexo == undefined) {
    //     alert('FAVOR PREENCHER O CAMPO SEXO!')
    // }
    // if (grauEscolaridade == '' || grauEscolaridade == null || grauEscolaridade == undefined) {
    //     alert('FAVOR PREENCHER O CAMPO GRAU DE ESCOLARIDADE!')
    // }
    // if (endereco == '' || endereco == null || endereco == undefined) {
    //     alert('FAVOR PREENCHER O CAMPO ENDEREÇO!')
    // }
    // if (optouVT == '' || optouVT == null || optouVT == undefined) {
    //     alert('FAVOR PREENCHER O CAMPO OPTOU VT!')
    // }


    // if (isNaN(valorPassagem)) {
    //     alert('FAVOR PREENCHER O CAMPO VALOR DA PASSAGEM COM UM NÚMERO VÁLIDO!');
    //     return;
    // }
    console.log(optouVT)

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
                "valorPassagem": valorPassagem,
                "optouVT": optouVT,
                "cargo": cargo,
                "salario": salario,
                "dataInicio": dataInicio,
                "dataDemissao": dataDemissao

            }
        )
    })
        .then(resp => resp.json())
        .then(dados => console.log(dados))
        .catch(err => console.error("Erro na requisição:", err));
}

