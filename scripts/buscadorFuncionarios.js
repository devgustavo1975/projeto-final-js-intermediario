const input = document.getElementById('input-pessoa');
const resultado = document.getElementById('resultado');

input.addEventListener('input', () => {
    const termo = input.value.trim().toLowerCase();

    if (termo === "") {
        resultado.innerHTML = "";
        return;
    }

    const pessoaEncontrada = pessoas.find(p =>
        p.nome.toLowerCase().includes(termo)
    );

    if (pessoaEncontrada) {
        const idade = new Date().getFullYear() - new Date(pessoaEncontrada.dtNascimento).getFullYear();

        resultado.className = "sucesso";
        resultado.innerHTML = `
          👤 <strong>${pessoaEncontrada.nome}</strong><br>
          Sexo: <strong>${pessoaEncontrada.sexo}</strong><br>
          Data de Nascimento: <strong>${new Date(pessoaEncontrada.dtNascimento).toLocaleDateString('pt-BR')}</strong> (${idade} anos)<br>
          Escolaridade: <strong>${pessoaEncontrada.grauEscolaridade}</strong><br>
          Endereço: <strong>${pessoaEncontrada.endereco}</strong><br>
          <img src="${pessoaEncontrada.foto}" alt="Foto de ${pessoaEncontrada.nome}" />
        `;
    } else {
        resultado.className = "erro";
        resultado.textContent = "❌ Nenhuma pessoa encontrada com esse nome.";
    }
});