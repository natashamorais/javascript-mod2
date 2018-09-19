const links = document.querySelector(".gallery__nav")
const image = document.querySelector (".gallery__image")


for (i = 0; i < links.children.lenght; i++) {
    const nene = links.children[i]
    
    nene.addEventListener("click", function () {
        //pega o caminho da imagem data-image
        const img = this.dataset.image
        console.log(img)
    
        image.src=img
    })
}
    ///nodelist = lista todos os nós htmllist= lista todas as tags///