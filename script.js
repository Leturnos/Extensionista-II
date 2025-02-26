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

// automação do  carousel

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('news-carousel');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    let interval;

    function updateCarousel() {
        const cardWidth = document.querySelector('.card').offsetWidth;
        const isMobile = window.innerWidth < 600;
        const cardsPerView = isMobile ? 1 : 2;
        const offset = -currentIndex * (cardWidth * cardsPerView + 18 * (cardsPerView - 1)); // 18px de gap
        carousel.style.transform = `translateX(${offset}px)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function startAutoSlide() {
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % dots.length;
            updateCarousel();
        }, 5000); // 5 segundos
    }

    function stopAutoSlide() {
        clearInterval(interval);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
            stopAutoSlide();
            startAutoSlide();
        });
    });

    window.addEventListener('resize', updateCarousel);

    updateCarousel();
    startAutoSlide();
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

// lista com falas pro peixe
const textos = [
    {
        titulo: "Castração gratuita na sua cidade!",
        paragrafo: "Fique por dentro das campanhas de castração em sua região. \
        Esse procedimento evita doenças graves como câncer de mama e de próstata, \
        além de diminuir comportamentos agressivos e marcação de território. \
        Proteja seu pet!"
    },
    {
        titulo: "Calendário de vacinação para pets",
        paragrafo: "Vacinar seu pet é essencial para a saúde dele e de todos ao redor. \
        A imunização previne doenças como raiva, cinomose, parvovirose e leishmaniose. \
        Veja os locais e datas das campanhas e mantenha a carteirinha de vacinação do seu pet sempre em dia!"
    },
    {
        titulo: "Adoção responsável",
        paragrafo: "Muitos pets esperam por um lar amoroso, mas a adoção deve ser feita com planejamento. \
        Antes de adotar, certifique-se de que pode oferecer um ambiente seguro, alimentação adequada e \
        tempo para seu novo companheiro. \
        Adotar é um compromisso para toda a vida, Descubra onde adotar e faça a diferença!"
    },
    {
        titulo: "Mutirão de vacinação neste fim de semana",
        paragrafo: "A prefeitura está organizando uma campanha de vacinação gratuita para cães e gatos. \
        Leve seu pet a um dos postos de vacinação mais próximos e garanta a proteção contra doenças graves. \
        A vacinação é essencial para evitar surtos e manter a saúde pública. \
        Não esqueça de levar a carteirinha de vacinação do seu animal!"
    },
    {
        titulo: "Dicas para preparar sua casa para um novo pet",
        paragrafo: "Antes de adotar um pet, é essencial preparar sua casa para recebê-lo com segurança e conforto. \
        Providencie uma cama aconchegante, recipientes para comida e água, brinquedos apropriados e um\
        local tranquilo para descanso. \
        Certifique-se de que sua casa está segura, removendo objetos perigosos e garantindo que o ambiente\
        seja adequado para o novo morador. \
        Se for um gato, ofereça arranhadores e locais elevados para ele se sentir seguro. \
        Com esses cuidados, a adaptação será mais fácil e seu pet será muito mais feliz!"
    },
    {
        titulo: "Feira de adoção acontece neste sábado",
        paragrafo: "Centenas de cães e gatos estarão esperando um novo lar na feira de adoção deste sábado. \
        Todos os animais são vacinados, vermifugados e muitos já estão castrados. \
        Ao adotar, você ganha um amigo fiel e ainda ajuda a reduzir o número de animais abandonados. \
        Não perca essa chance de mudar a vida de um pet!"
    },
    {
        titulo: "Como identificar sinais de doenças em pets",
        paragrafo: "Mudanças de comportamento podem indicar problemas de saúde em cães e gatos. \
        Fique atento a sinais como apatia, falta de apetite, vômitos, diarreia, lambedura excessiva, \
        coceira intensa ou dificuldade para se mover. \
        Além disso, alterações na cor da gengiva, secreção nos olhos ou nariz e \
        respiração ofegante são sinais de alerta. \
        Caso perceba algum desses sintomas, procure um veterinário o quanto antes!"
    },
    {
        titulo: "Bem-vindo ao PetCenter",
        paragrafo: "Aqui você encontra informações sobre castração, vacinação e adoção de pets.\
        Nosso objetivo é ajudar você a cuidar melhor do seu amigo!"
    }
];

let index = 0;
function changeText() {
    const title = document.getElementById("Title");
    const paragraph = document.getElementById("Paragraph");

    // Inicia o efeito de fade-out
    title.style.opacity = 0;
    paragraph.style.opacity = 0;

    setTimeout(() => {
        // Troca o texto quando ele estiver invisível
        title.innerText = textos[index].titulo;
        paragraph.innerText = textos[index].paragrafo;

        // Inicia o efeito de fade-in
        title.style.opacity = 1;
        paragraph.style.opacity = 1;

        // Atualiza o índice para o próximo texto
        index = (index + 1) % textos.length;

        const baseTime = 6000; // Tempo mínimo de 6 segundos
        const charMultiplier = 20; // Tempo extra por caractere
        const newInterval = baseTime + (textos[index].paragrafo.length * charMultiplier);

        // Chama a próxima mudança de texto com o tempo ajustado
        setTimeout(changeText, newInterval);
    }, 500);
}

// Mostra o balão e o peixe após 1 segundo e inicia a troca de textos
setTimeout(() => {
    const balloon = document.getElementById("speechBubble");
    const showFish = document.getElementById("show_fish");

    showFish.classList.add("show") // mostra o peixe subindo

    balloon.style.visibility = "visible";
    balloon.style.opacity = "1";
    balloon.style.transform = "scale(1)";

    // após 8 segundos com a mensagem de bem-vindo, começa a rotacionar os textos
    setTimeout(() => {
        changeText();
    }, 8000);
}, 1000);


