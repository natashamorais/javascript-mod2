const button = document.getElementById("submitButton")
const score = document.getElementById("userScore")
const resultado = document.createElement("div")

button.addEventListener("click", function (event) {
    event.preventDefault()
    if( score == 0){
    resultado.innerHTML = `Shame! Shame! Shame!`
    }
    else if ( score == 2){
    resultado.innerHTML = `You know nothing Jon Snow`
    }
    else if (score === 3){
        resultado.innerHTML = `Mediano`
    }
    else if (score === 4|| score === 5 ){
        resultado.innerHTML = `Temos um expert aqui`
    }





})

