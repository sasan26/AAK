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

function subMenu(id1,id2,id3,add,rm1,rm2,badd,brm,num){
    var mborder = document.getElementsByClassName("sub-menu")[num];
    var subMenu = document.getElementById(id1);
    var subMenu2 = document.getElementById(id2);
    var subMenu3 = document.getElementById(id3);
    subMenu.classList.add(add);   
    subMenu2.classList.remove(rm1);
    subMenu3.classList.remove(rm2);
    mborder.classList.add(badd);
    mborder.classList.remove(brm);
}



function hideSubmenu(){
    var subMenu = document.getElementById("project-submenu");
    var subMenu2 = document.getElementById("post-submenu");
    var subMenu3 = document.getElementById("page-submenu");
    var subMenu4 = document.getElementById("eu-submenu");
    var subMenu5 = document.getElementById("us-submenu");
    var subMenu6 = document.getElementById("ins-submenu");
    var mborder = document.getElementsByClassName("sub-menu")[0];
    var mborder2 = document.getElementsByClassName("sub-menu")[2];
    subMenu.classList.remove("project-on");
    subMenu2.classList.remove("post-on");
    subMenu3.classList.remove("page-on");
    subMenu4.classList.remove("eu-on");
    subMenu5.classList.remove("us-on");
    subMenu6.classList.remove("ins-on");
    mborder.classList.remove("menu-border");
    mborder.classList.remove("menu-border-bottom");
    mborder2.classList.remove("menu-border");
    mborder2.classList.remove("menu-border-bottom");
}

function showMenu(){
    var menu = document.getElementById("mainmenu");
    menu.style.display = "block";
}

function hideMenu(){
    var menu = document.getElementById("mainmenu");
    menu.style.display = "none";
}



function play() { 
    var video = document.getElementById("hero-video"); 
    if (video.paused) {
        video.play(); 
       console.log(video.muted);}
    else {
        video.pause();  console.log(video.muted)   }
}

function muteVideo() { 
    var video = document.getElementById("hero-video"); 
    var muteV = document.getElementById("v-mute");
    var unmuteV = document.getElementById("v-unmute");
    if (video.muted) {
        video.muted = false; 
        muteV.style.display = "none";
        unmuteV.style.display = "block";
    }
    else{ 
        video.muted = true; 
        unmuteV.style.display = "none";
        muteV.style.display = "block";
    }   
}

// function hideCookie(){
//     var cookie = document.getElementById("cookie");
//     cookie.style.display = "none";
// }

function acceptCookie(){
    var cookie = document.getElementById("cookie");
    cookie.style.display = "none";
     console.log("hichi");
     if (typeof(Storage) !== "undefined") {
        localStorage.setItem("AAKcookie", "yes");  console.log("yes");      
    } 
    else{console.log("no");}
}

function getCookie(){ 
    var cookieAAK = localStorage.getItem("AAKcookie");
    var cookie = document.getElementById("cookie");
    if( cookieAAK == "yes" ){
        cookie.style.display = "none";
    }
    console.log(cookieAAK);
}


// function projMenuShow(){
//     var submenu = document.getElementById("pmenu");
//     if( submenu.style.display == "block" ){
//         submenu.style.display = "none"
//     }
//     else{
//         submenu.style.display = "block"
//     }
    
// }

function projMenuShow(id){
    var submenu = document.getElementsByClassName("pmenu")[id];
    if( submenu.style.display == "block" ){
        submenu.style.display = "none"
    }
    else{
        submenu.style.display = "block"
    }
    
}

function subfilter(){
    var filter = document.getElementById("sub-filter");
    if( filter.style.display == "block" ){
        filter.style.display = "none"
    }
    else{
        filter.style.display = "block"
    }
}

function filterToggle(id){
    var filter = document.getElementById(id);
    var down = document.querySelector("."+id+" .fa-angle-down");
    var up = document.querySelector("."+id+" .fa-angle-up");
    const filters = ["year-menu", "lang-menu", "category-menu", "location-menu"];
    if( filter.style.display == "block" ){
        for( var i = 0; i< filters.length; i++){
            var subfilter = document.getElementById(filters[i]);
            var upArr = document.querySelector("."+filters[i]+" .fa-angle-up");
            var dArr = document.querySelector("."+filters[i]+" .fa-angle-down");
            subfilter.style.display = "none";
            upArr.style.display = "none";
            dArr.style.display = "inline";
        }
        filter.style.display = "none";
        down.style.display = "inline";
        up.style.display = "none";

    }
    else{
        
        for( var i = 0; i< filters.length; i++){
            var subfilter = document.getElementById(filters[i]);
            var upArr = document.querySelector("."+filters[i]+" .fa-angle-up");
            var dArr = document.querySelector("."+filters[i]+" .fa-angle-down");
            subfilter.style.display = "none";
            up.style.display = "inline";
            down.style.display = "none";
            upArr.style.display = "none";
            dArr.style.display = "inline";
        }
        filter.style.display = "block";
        up.style.display = "inline";
        down.style.display = "none";
        
    }
}

function showMore(id){
    var btn = document.getElementsByClassName("a")[id];
    var pb = document.getElementsByClassName("pb")[id]; 
    var box = document.getElementsByClassName("pbox")[id];   

    if (pb.style.maxHeight){
        btn.style.display = "inline";
        pb.style.maxHeight = null;
        box.style.maxHeight = null;
    }
    else{
        pb.style.maxHeight = pb.scrollHeight + "px";
        box.style.maxHeight =   "2000px";
        btn.style.display = "none";
    }
}

function expandBox(id){
    var panel = document.getElementsByClassName("panel")[id];
    var box = document.getElementsByClassName("pbox")[id];
    var body = document.getElementsByClassName("body")[id];
    var footer = document.getElementsByClassName("footer")[id];
    var up = document.getElementsByClassName("up-arr")[id];
    var down = document.getElementsByClassName("down-arr")[id];
    
    body.classList.toggle("display-toggle");
    footer.classList.toggle("display-toggle");
    down.classList.toggle("display-toggle");

    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        box.style.maxHeight = null;
        up.style.display = "none";
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        box.style.maxHeight =   "2000px";
        up.style.display = "inline-block";
      } 
}

function selectMenu(){
    var s = document.activeElement.id;
    var item = document.getElementById(s);
    var i = document.querySelector("#" + s + " i.fa-check")

    item.classList.toggle("scope-selected-item");
    i.classList.toggle("display-check");
    
}

function addSkill(){
    var item = document.getElementById("addskill").value;
    console.log(item);
    var skill = document.createElement("DIV");
    skill.innerHTML = item;
    document.getElementById("listed").appendChild(skill);
}

function showSkillBox(){
    var item = document.getElementsByClassName("sbox")[0];
    item.classList.toggle("display-check");
}

function showItems(id){
    var item = document.getElementsByClassName("q-btn")[id];
    // item.classList.toggle("display-check");

    var arr = document.getElementsByClassName("qarru")[id];
    var arr2 = document.getElementsByClassName("qarrd")[id];

    if(item.style.display == "block"){
        item.style.display = "none";
        arr.style.display = "none";
        arr2.style.display = "inline-block"
    }
    else{
        item.style.display = "block";
        arr2.style.display = "none";
        arr.style.display = "inline-block"
    }
 
}

