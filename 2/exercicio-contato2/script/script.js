const inputNome = document.getElementById("contatoInputNome");
const inputEmail = document.getElementById("contatoInputEmail");
const inputPhone = document.getElementById("contatoInputPhone");
const inputMessage = document.getElementById("contatoInputMessage");
const button = document.querySelector(".contato__button")

button.addEventListener("click", function (event){
  event.preventDefault();


  if(inputNome.value === null || inputNome.value  === undefined || inputNome.value === ""){
    inputNome.focus();
    return false;
  }
  else if(inputEmail.value === null || inputEmail.value === undefined || inputEmail.value === ""){
    inputEmail.focus();
    return false;
  }
  else if(inputPhone.value === null || inputPhone.value === undefined || inputPhone.value === ""){

    inputPhone.focus();
    return false;
  }
  else if(inputMessage.value === null || inputMessage.value === undefined || inputMessage.value === ""){

    inputMessage.focus();
    return false;
  }
  alert("sou bem louca e perigosa")
});
