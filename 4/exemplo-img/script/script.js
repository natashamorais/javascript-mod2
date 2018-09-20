const links = document.querySelector(".gallery__nav");
const imagem = document.querySelector(".gallery__image");
const legenda = document.querySelector("figcaption")

// console.log(links.length)
//console.log(links.children)

for(let i = 0; i < links.children.length; i++){
    console.log(links.children[i])
    const bebe = links.children[i];
    bebe.addEventListener("click", function(){
        //pegar o caminho da img no atributo data-image
        const img = this.dataset.image;
        console.log(img);
        imagem.src = img;

        const text = this.dataset.title
        legenda.innerHTML = text; 
    })
}



