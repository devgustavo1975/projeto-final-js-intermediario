const pessoas = [
    {
        nome: "Maria Silva",
        sexo: "Feminino",
        dtNascimento: "1990-06-15",
        grauEscolaridade: "Ensino Superior Completo",
        endereco: "Rua das Flores, 123 - São Paulo, SP",
        foto: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        nome: "João Souza",
        sexo: "Masculino",
        dtNascimento: "1985-10-22",
        grauEscolaridade: "Ensino Médio Completo",
        endereco: "Av. Brasil, 456 - Rio de Janeiro, RJ",
        foto: "https://randomuser.me/api/portraits/men/33.jpg"
    },
    {
        nome: "Ana Oliveira",
        sexo: "Feminino",
        dtNascimento: "1992-03-08",
        grauEscolaridade: "Pós-Graduação",
        endereco: "Rua Atlântica, 789 - Curitiba, PR",
        foto: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
        nome: "Carlos Pereira",
        sexo: "Masculino",
        dtNascimento: "1979-12-01",
        grauEscolaridade: "Ensino Superior Incompleto",
        endereco: "Rua do Sol, 321 - Salvador, BA",
        foto: "https://randomuser.me/api/portraits/men/41.jpg"
    }
];

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