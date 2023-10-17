const tbody = document.getElementById("tbody")

function gerarTabela(listaDados)
{
  function criarLinhas()
  {
    return listaDados.map((item, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${item.nome}</td>
      <td>${item.email}</td>
      <td>
        <button onclick="DeletarDados('${index}')">Deletar</button>
        <button onclick="">Editar</button>
      </td>
    </tr>
    `).join('');
  }

  const html = criarLinhas()
  tbody.innerHTML = html;
}