function revealElements() {

    const reveals = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;

    reveals.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        } 
        else {
            element.classList.remove("active");
        }

    });
}

window.addEventListener("scroll", revealElements);



window.addEventListener("scroll", function(){

    const scrollY = window.scrollY;
    const overlay = document.querySelector(".overlay");

    let opacityValue = scrollY / 500;

    if(opacityValue > 0.8){
        opacityValue = 0.8;
    }

    overlay.style.opacity = opacityValue;

});

// navbar
window.addEventListener("scroll", function(){
    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.style.background = "rgba(0, 0, 0, 0.31)";
    }else{
        navbar.style.background = "rgba(0,0,0,0.6)";
    }
});




