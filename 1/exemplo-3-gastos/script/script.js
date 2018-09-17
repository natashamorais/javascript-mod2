const botao = document.querySelector(".transacao__button")
botao.addEventListener("click", function (event) {
    event.preventDefault();
    //-------convoca tabela do html------------------
    const tabela = document.querySelector(".extrato__table");
    //-----------cria linha----------------
    const row = document.createElement("tr");
    //------------adiciona linha a tabela-------------
    //------------------cria coluna----------------
    const colunaNome = document.createElement("td");
    const colunaValor = document.createElement("td");
    const colunaData = document.createElement("td");
    //-----------insere coluna na linha --------------
    row.appendChild(colunaNome);
    row.appendChild(colunaValor);
    row.appendChild(colunaData);

    //-----insere linha na tabela---------
    tabela.appendChild(row);
    /* //-------insere texto na coluna-------
     const nomeTexto = document.createTextNode("teste1");
     colunaNome.appendChild(nomeTexto);
     const nomeValor = document.createTextNode("teste2");
     colunaValor.appendChild(nomeValor);
     const nomeData = document.createTextNode("teste3");
     colunaData.appendChild(nomeData);
 */
    //----------insere input na coluna-------------
    const inputNome = document.getElementById("transacaoInputName");
    const nomeTexto = document.createTextNode(inputNome.value);
    colunaNome.appendChild(nomeTexto);
    const inputValor = document.getElementById("transacaoInputMoney")
    const nomeValor = document.createTextNode(inputValor.value);
    colunaValor.appendChild(nomeValor);
    const inputData = document.getElementById("transacaoInputDate")
    const nomeData = document.createTextNode(inputData.value);
    colunaData.appendChild(nomeData);


});