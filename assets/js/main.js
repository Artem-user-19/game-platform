let input = document.getElementById("input")
const button = document.getElementById("button")
let error = document.getElementById("error")

button.onclick = () => {
    if (input.value != "") {
        error.style.color = "green"
        error.innerHTML = "Succesfully accepted"
    } else {
        error.style.color = "red"
        error.innerHTML = "Please, fill the field"
        input.classList.toggle("shake")
    }
}

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}