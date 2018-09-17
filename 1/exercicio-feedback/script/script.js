const botao = document.querySelector(".feedback__button")


botao.addEventListener("click", function(event) {
event.preventDefault();

const testimonial = document.querySelector(".testimonials");

const testimonialInsert = document.createElement ("span");
testimonial.appendChild(testimonialInsert);


const testimonialInput = document.getElementById ("feedbackInputMessage");
const testimonialTexto = document.createTextNode (testimonialInput.value);
testimonialInsert.appendChild(testimonialInput);

});