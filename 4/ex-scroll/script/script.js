const button = document.getElementById("arrowTop");

button.addEventListener("click", function () {
    window.scrollTo(pageYOffset, 0)

})
window.addEventListener("scroll", function () {
    console.log(pageYOffset)
    if (pageYOffset > 450) {
        button.hidden = false;
        return false
    }
    button.hidden = true


})