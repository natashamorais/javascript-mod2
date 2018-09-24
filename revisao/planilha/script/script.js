//tweet.innerHTML = `<p> ${tweetInput}</p>`////
//criar linha >  criar coluna > colocar valor na coluna > 
const button = document.querySelector(".feedback__button")
const tabela = document.querySelector(".respostas__table")
// const linha = document.createElement("tr")
// const empresa = document.createElement("td")
// const empresaInput = document.getElementById("feedbackInputName")
// const cidade = document.createElement("td")
// const cidadeInput = document.getElementById("feedbackInputMoney")
// const comentario = document.createElement("td")
// const comentarioInput = document.getElementById("feedbackInputDate")

button.addEventListener("click", function(e){
    e.preventDefault()
    const linha = document.createElement("tr")
    const empresa = document.createElement("td")
    const empresaInput = document.getElementById("feedbackInputName")
    const cidade = document.createElement("td")
    const cidadeInput = document.getElementById("feedbackInputMoney")
    const comentario = document.createElement("td")
    const comentarioInput = document.getElementById("feedbackInputDate")
    
    empresa.innerHTML = empresaInput.value
    
    cidade.innerHTML = cidadeInput.value
    
    comentario.innerHTML = comentarioInput.value 
    
    linha.appendChild(empresa)
    linha.appendChild(cidade)
    linha.appendChild(comentario)

    tabela.appendChild(linha)

    empresaInput.value = ""
    cidadeInput.value = ""
    comentarioInput.value = ""

})