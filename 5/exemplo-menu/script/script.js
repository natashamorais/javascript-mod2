const button = document.querySelector(".sidebar-menu__button")
const sidebar = document.querySelector(".sidebar-menu")

button.addEventListener("click", function (event) {
    event.preventDefault()
    //----------classList é sobre a lista de classes no HTML--------------
    //------------checa se contem uma classe-----------
    if (sidebar.classList.contains("sidebar-menu__visible")) {
        ////----------remove classe---------
        sidebar.classList.remove("sidebar-menu__visible")
        /// ---------- adiciona uma classe------------
        sidebar.classList.add("sidebar-menu__hidden")
    }
    else {
        sidebar.classList.remove("sidebar-menu__hidden")
        sidebar.classList.add("sidebar-menu__visible")
    }
})