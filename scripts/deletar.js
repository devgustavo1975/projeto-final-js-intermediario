function deletarFuncionario() {
    const idUsuario = window.location.search.split("?")[1];
    
    fetch(`https://node-vercel-app-rho.vercel.app/api/funcionarios/${idUsuario}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(resp => {
        if (!resp.ok) {
            throw new Error("Erro ao deletar funcionário.");
        }
        return resp.json();
    })
    .then(dados => {
        alert("Funcionário nº {idUsuaruio} deletado:", dados);

        alert("Funcionário deletado com sucesso!");

        window.location.href = "/index.html";
    })
    .catch(err => {
        console.error("Erro na requisição:", err);
        alert("Erro ao deletar funcionário. Tente novamente.");
    });
}

