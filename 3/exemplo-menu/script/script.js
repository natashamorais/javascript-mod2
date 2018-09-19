const menu = document.querySelector(".sidebar-menu__button")
const sidebar = document.querySelector(".sidebar-menu")

menu.addEventListener("click", function (event) {
    event.preventDefault();

    //document.querySelector(".sidebar-menu").style.left = "-435px"

    // if ( document.querySelector(".sidebar-menu").style.left === "-435px") {
    //     document.querySelector(".sidebar-menu").style.left = "0px"
    // }
    // else {
    //     document.querySelector(".sidebar-menu").style.left = "-435px"
    // }
//------------------------solucão com if else-------------------

    if (sidebar.style.left === "-435px") {
        ///------como modificar um atributo só do css-------///
        sidebar.style.left = "0px"
    }
    else {
        sidebar.style.left = "-435px"
    }
 /////------- como modificar vários atributos do css ao mesmo tempo-------------------
    // sidebar.setAtttribute(
    //     "style", "font-size: 100px; font-style : italic; color: #ff0000;"
    ///definir o style com aspas e criar uma string com os atributos a ser modificados
    // );


})
/// ------------- solução com if e counter------------------
// let counter = 1;
// menu.addEventListener("click", function(event){
//     event.preventDefault()

// sidebar.style.left = "-435px"
// counter++
// if(counter % 2 !== 0){
//     sidebar.style.left = "0px"
// }
// })