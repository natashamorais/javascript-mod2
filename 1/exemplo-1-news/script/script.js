//const titulo = document.querySelector(".news__title");
//console.log (titulo);

//const texto= document.getElementById("newsInputEmail");
//console.log(texto);

//alert(titulo);


/*
RETORNANDO POP UP E INNERHTML 
const input = document.getElementById("newsInputEmail");
console.log(input)
const botao = document.querySelector(".news__button");
botao.addEventListener("click", function(evento){
    evento.preventDefault();
    const email = input.value;

    const form = document.querySelector (".news__form")
    form.innerHTML = `O email ${email} foi cadastrado com sucesso`
    //alert(`O email ${email} foi cadastrado com sucesso`)



});*/

const input = document.getElementById("newsInputEmail");
const botao = document.querySelector(".news__button");

botao.addEventListener("click", function (event){
 
    event.preventDefault();
    //-------CRIA NOVOS ELEMENTOS-------------
    const resposta = document.createElement("span");
    //------------CRIA NÓS DE TEXTO------------------
    const respostaMensagem = document.createTextNode("Email cadastrado com sucesso!");
    //-----------------INSERE ITEM DENTRO DE UM ELEMENTO-------------
    resposta.appendChild(respostaMensagem);
    //----------------INSERE ITEM ANTES DE UM ELEMENTO PRÉ ESTABELECIDO----------
    const newsForm = document.querySelector(".news__form");
    newsForm.insertBefore (resposta, newsForm.childNodes[0]);

});
