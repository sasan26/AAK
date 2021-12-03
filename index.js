// let modal = document.getElementById("mabout");

var about = document.getElementById("about-btn");

// var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
function aboutme() {
    var modal = document.getElementById("mabout");
    modal.style.display = "block";
    console.log("About me");
}

function exprience() {
    var modal = document.getElementById("mexp");
    modal.style.display = "block";
    console.log("Experience");
}

function skill() {
    console.log("Skills");
}

function education() {
    console.log("Education");
}

function contact() {
    console.log("Contact");
}

function closeModal(){
    var modal = document.getElementsByClassName("modal-frame");
    for (var i = 0; i < modal.length; i++) {
        modal[i].style.display = "none";
    }
}



