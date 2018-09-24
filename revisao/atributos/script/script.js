const button = document.querySelector("button")
const link = document.getElementById("externo")
const article = document.querySelector(".article")
//////solucao da mell //////
button.addEventListener("click", function (e) {
    e.preventDefault()
    ///cria um for  para iterar o por todos os atributos
for ( i = 0; i < link.attributes.length; i++){
    //cria um espacinho pra colocar os atributos
 const p = document.createElement("p")
    ///.attributes é uma palavra reservada para chamar os atributos numa array 
 p.innerHTML = `${link.attributes[i].name}:${link.attributes[i].value}`
    ////coloca a array no espacinho
 article.appendChild(p)
}
})

/* solução da Bah 
const atributos = document.getElementById("externo")
const atributosText = document.querySelector(".atributosText")
const atributosBox = document.createElement ("p")