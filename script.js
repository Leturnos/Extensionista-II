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



// teste carousel
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('news-carousel');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    function updateCarousel() {
        const cardWidth = document.querySelector('.card').offsetWidth;
        const isMobile = window.innerWidth < 600;
        const cardsPerView = isMobile ? 1 : 2;
        const offset = -currentIndex * (cardWidth * cardsPerView + 10 * (cardsPerView - 1)); // 10px de gap
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

    window.addEventListener('resize', updateCarousel);

    updateCarousel();
});

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.modal-content');
    const modalTitle = document.querySelector('.modal-title');
    const modalDescription = document.querySelector('.modal-description');
    const closeModal = document.querySelector('.close');

    // Garante que o modal inicie oculto
    modal.style.display = 'none';

    // Seleciona todos os artigos
    const articles = document.querySelectorAll('.portfolio-item');

    // Ao clicar em um artigo, atualiza e exibe o modal
    articles.forEach(article => {
        article.addEventListener('click', function () {
            // Pega os textos para o modal dos atributos data
            const title = this.getAttribute('data-title');
            const description = this.getAttribute('data-description');

            modalTitle.textContent = title;
            modalDescription.textContent = description;

            // Exibe o modal e adiciona a classe para animação
            modal.style.display = 'flex';
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
        });
    });

    // Fecha o modal ao clicar no botão "X"
    closeModal.addEventListener('click', function () {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    });

    // Fecha o modal ao clicar fora do conteúdo (na área escurecida)
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }
    });
});
