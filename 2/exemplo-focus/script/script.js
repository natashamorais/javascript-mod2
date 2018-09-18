const inputNome = document.getElementById("cadastroInputNome");
const inputEmail = document.getElementById("cadastroInputEmail");
const inputEmailConfirm = document.getElementById("cadastroInputEmailConfirm");
const inputPassword = document.getElementById("cadastroInputPassword");
const inputPasswordConfirm = document.getElementById("cadastroInputPasswordConfirm");
const inputPhone = document.getElementById("cadastroInputPhone");
const inputTexto = document.getElementById("cadastroInputArea");
const button = document.querySelector(".cadastro__button");
const inputCheck = document.getElementById("cadastroInputNews");
const cascade = document.getElementById("cadastroInputArea");

button.addEventListener("click", function (event) {
  event.preventDefault();

  // console.log(inputTexto.options[inputTexto.selectedIndex]);
  // console.log(inputTexto.options[inputTexto.selectedIndex].value);

  // const optionSelect = inputTexto.options[inputTexto.selectedIndex]
  // console.log = optionSelect;
  // console.log(check);
  //console.log(inputCheck.checked);

  let radio
  for (i = 0; i < cascade.lenght; i++) {
    if (cascade[i].checked) {
      radio = cascade[i]
    }


    if (inputNome.value === null || inputNome.value === "" || inputNome.value === undefined) {
      inputNome.focus();
      return false;
    }
    else if (inputEmail.value === null || inputEmail.value === "" || inputEmail.value === undefined) {
      inputEmail.focus();
      return false;
    }
    else if (inputEmailConfirm.value === null || inputEmailConfirm.value === "" || inputEmailConfirm.value === undefined || inputEmailConfirm.value !== inputEmail.value) {
      inputEmailConfirm.focus();
      return false;
    }
    else if (inputPassword.value === null || inputPassword.value === "" || inputPassword.value === undefined) {
      inputPassword.focus();
      return false;
    }

    else if (inputPasswordConfirm.value === null || inputPasswordConfirm.value === "" || inputPasswordConfirm.value === undefined || inputPasswordConfirm.value != inputPassword.value || inputPasswordConfirm.value.lenght < 7) {
      inputPasswordConfirm.focus();

      alert("a senha deve ter mais do que sete digitos!")
      return false;
    }

    else if (inputPhone.value === null || inputPhone.value === "" || inputPhone.value === undefined) {
      inputPhone.focus();
      return false;
    }

    else if (inputTexto.value === null || inputTexto.value === "" || inputTexto.value === undefined) {
      inputTexto.focus();
      return false;
    }
    else if (inputCheck.value !== inputCheck.checked) {
      inputCheck.focus();
      alert("Que pena que vc não quer nossas noticias lindas :(")
      return false;
    }
    if (radio.value == "Junior") {
      console.log("0-2")
    }
    else if (radio.value == "Pleno") {
      console.log("2+")
    }
    else if (radio.value == "Senior") {
      console.log("5+")
    }

    if (cascade.value == "Front-End") {
      document.querySelector("body").bgColor = "pink"
    }
    else if (cascade.value == "UX Designer") {
      document.querySelector("body").bgColor = "purple"
    }
    else if (cascade.value == "Back-End") {
      document.querySelector("body").bgColor = "lavender"
    }
    else if (cascade.value == "UI Designer") {
      document.querySelector("body").bgColor = "blue"
    }
    else if (cascade.value == "Back-End") {
      document.querySelector("body").bgColor = "green"
    }
    
  }) //ERROROOROROROOROROOR


// cascade.addEventListener("click", function (event) {
//   event.preventDefault();
// })
 // const optionSelect = inputTexto.options[inputTexto.selectedIndex]