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

// FULLSCREEN LIGHTBOX WITH ARROWS (FIXED ACTIVE IMAGE)

document.querySelectorAll(".project-carousel").forEach(carousel => {

    const images = Array.from(carousel.querySelectorAll("img"));

    carousel.addEventListener("click", () => {

        // 🔑 Trouver l'image actuellement visible
        let currentIndex = images.findIndex(img =>
            img.classList.contains("active")
        );

        if (currentIndex === -1) currentIndex = 0;

        // Lightbox container
        const lightbox = document.createElement("div");
        lightbox.className = "lightbox";

        // Image fullscreen
        const fullscreenImg = document.createElement("img");
        fullscreenImg.src = images[currentIndex].src;

        // Flèches
        const leftArrow = document.createElement("div");
        leftArrow.className = "lightbox-arrow left";
        leftArrow.innerHTML = "&#10094;";

        const rightArrow = document.createElement("div");
        rightArrow.className = "lightbox-arrow right";
        rightArrow.innerHTML = "&#10095;";

        function updateImage() {
            fullscreenImg.src = images[currentIndex].src;
        }

        // Navigation
        leftArrow.addEventListener("click", (e) => {
            e.stopPropagation();
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateImage();
        });

        rightArrow.addEventListener("click", (e) => {
            e.stopPropagation();
            currentIndex = (currentIndex + 1) % images.length;
            updateImage();
        });

        // Append
        lightbox.appendChild(leftArrow);
        lightbox.appendChild(fullscreenImg);
        lightbox.appendChild(rightArrow);
        document.body.appendChild(lightbox);

        // Close
        function closeLightbox() {
            lightbox.remove();
            document.removeEventListener("keydown", keyHandler);
        }

        lightbox.addEventListener("click", closeLightbox);

        function keyHandler(e) {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowLeft") leftArrow.click();
            if (e.key === "ArrowRight") rightArrow.click();
        }

        document.addEventListener("keydown", keyHandler);
    });
});



