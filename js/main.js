document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".slide");
    let index = 0;

    function changeSlide() {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }

    setInterval(changeSlide, 4000);

});

// PROJECT CAROUSELS
document.querySelectorAll(".project-carousel").forEach(carousel => {

    const images = carousel.querySelectorAll("img");
    let index = 0;

    setInterval(() => {
        images[index].classList.remove("active");
        index = (index + 1) % images.length;
        images[index].classList.add("active");
    }, 3500);

});
