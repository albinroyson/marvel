let moon = document.getElementById("moon")
let sun = document.getElementById("sun")
let menu = document.getElementById("menu")
let close = document.getElementById("close")
let menubar =document.getElementById("mobile-menu")
let spotlight = document.getElementById("spotlight")

moon.onclick = () =>{
    document.body.classList.toggle("dark")
    moon.classList.toggle("active")
    sun.classList.toggle("active")
}
sun.onclick = () =>{
    document.body.classList.toggle("dark")
    moon.classList.toggle("active")
    sun.classList.toggle("active")
}
menu.onclick = () =>{
    menu.classList.toggle("active")
    close.classList.toggle("active")
    menubar.classList.toggle("active")
    spotlight.classList.toggle("active")
    
}
close.onclick = () =>{
    menu.classList.toggle("active")
    menubar.classList.toggle("active")
    spotlight.classList.toggle("active")
};
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items:1,
        dots:true,
        loop:true,
        margin:10,
        nav:true,
    });
});
