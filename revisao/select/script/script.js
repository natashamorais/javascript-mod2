const option = document.getElementById("selectInputArea")
const button = document.querySelector(".select__button")


button.addEventListener("click", function (e) {
    e.preventDefault()
    
    if (option.selectedIndex === 0) {
    option.removeChild(option.childNodes[0])
    }
    if (option.selectedIndex === 1 ){
        option.removeChild(option.childNodes[1])
    }
    if (option.selectedIndex === 2) {
        option.removeChild(option.childNodes[2])
    }
    
    if (option.selectedIndex === 3) {
        option.removeChild(option.childNodes[3])
    }
})