// let modal = document.getElementById("mabout");

var about = document.getElementById("about-btn");

// var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 

function info() {
    var modal = document.getElementById("info");
    modal.style.display = "block";
    console.log("user info");
}

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
    var modal = document.getElementById("mski");
    modal.style.display = "block";
}

function education() {
    var modal = document.getElementById("medu");
    modal.style.display = "block";
}

function contact() {
    var modal = document.getElementById("mcon");
    modal.style.display = "block";
}

function pic() {
    var modal = document.getElementById("mpic");
    modal.style.display = "block";
}

function closeModal(){
    var modal = document.getElementsByClassName("modal-frame");
    for (var i = 0; i < modal.length; i++) {
        modal[i].style.display = "none";
    }
}



