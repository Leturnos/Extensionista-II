// Sidebar animation
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebarMenu = document.getElementById('sidebar-menu');
const overlay = document.getElementById('overlay');

sidebarToggle.addEventListener('click', () => {
    sidebarMenu.classList.toggle('open');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    sidebarMenu.classList.remove('open');
    overlay.classList.remove('active');
});

/* carousel-dots 
const carousel = document.getElementById("news-carousel");
const dots = document.querySelectorAll(".dot");

function goToSlide(index) {
    const cardWidth = document.querySelector(".card").offsetWidth;
    carousel.scrollTo({
        left: index * (cardWidth + 15), // 15px de gap
        behavior: "smooth"
    });

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

dots.forEach(dot => {
    dot.addEventListener("click", () => {
        const index = parseInt(dot.dataset.index);
        goToSlide(index);
    });
});*/


/* teste carousel
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('news-carousel');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100 / 2; // 2 cards visíveis por vez
        carousel.style.transform = `translateX(${offset}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    updateCarousel();
});*/

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('news-carousel');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    function updateCarousel() {
        const cardWidth = document.querySelector('.card').offsetWidth;
        const offset = -currentIndex * (cardWidth * 2 + 20); // 2 cards visíveis por vez, 10px de gap cada
        carousel.style.transform = `translateX(${offset}px)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    updateCarousel();
});
