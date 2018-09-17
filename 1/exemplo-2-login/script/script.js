const botao = document.querySelector(".login__button");
const input = document.getElementById("loginInputEmail");

//-----------SUBSTITUI O QUE JÁ EXISTE NA PÁGINA POR UMA MSG COM INNERHTML
/*botao.addEventListener("click", function(evento){
    evento.preventDefault();
 const email = input.value;

 const form = document.querySelector(".login__form");
 form.innerHTML = `Seu login com ${email} foi realizado com sucesso!! ^^`
    //alert(`Seu login com ${email} foi realizado com sucesso!`)
    
});*/

botao.addEventListener( "click", function(evento){
    evento.preventDefault();

    const login = document.createElement("h1");

    const loginInput = document.createTextNode ("Seu login foi realizado com sucesso! ^^")
    login.appendChild(loginInput);
    
    const loginForm =  document.querySelector(".login__form");
    loginForm.insertBefore(login, loginForm.childNodes[0]);
})