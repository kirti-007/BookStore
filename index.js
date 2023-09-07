let slideIndex = 0;
showSlides();

function showSlides(){
    let i;
    let slides = document.getElementsByClassName("box");
    let container = document.getElementsByClassName("reviewcontainer")
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "flex";

    let dots = document.getElementsByClassName("dot");

    setTimeout(showSlides , 2000);
}