function CadastrarDados(){

    const nome = document.querySelector("#name");
    const email = document.querySelector("#email");

    const data = {nome: nome.value, email: email.value};
    nome.value = '';
    email.value = '';

    listaDados.push(data)
    gerarTabela(listaDados);
  }