const aumentar = document.querySelector(".aumentar")
const diminuir = document.querySelector(".diminuir")
const texto = document.querySelector("body") 
let size = 16 




aumentar.addEventListener("click", function(e){
    e.preventDefault()
    size = size + 3 
    texto.style.fontSize = size + "px"
})


diminuir.addEventListener("click", function(event){
    event.preventDefault()
    size = size - 3 
    texto.style.fontSize = size + "px"
})