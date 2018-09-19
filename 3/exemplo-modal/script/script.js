const button1 = document.querySelector(".login__button")
const button2 = document.querySelector(".login-modal__button-close")

button1.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".login-modal").style.display="flex"
})


button2.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".login-modal").style.display = "none";
})