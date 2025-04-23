document.addEventListener('DOMContentLoaded', function() {
    // Efeito de digitação no título
    const titles = document.querySelectorAll('header h1');
    
    titles.forEach(title => {
        if (!title.dataset.typed) {
            const originalText = title.textContent;
            title.textContent = '';
            title.dataset.typed = 'true';
            
            let i = 0;
            const typingEffect = setInterval(() => {
                if (i < originalText.length) {
                    title.textContent += originalText.charAt(i);
                    i++;
                } else {
                    clearInterval(typingEffect);
                }
            }, 100);
        }
    });
    
    // Efeito de revelação nas seções
    const sections = document.querySelectorAll('.section');
    
    const revealSections = function() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Configura estado inicial
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Revela seções visíveis no carregamento
    revealSections();
    
    // Revela seções durante o scroll
    window.addEventListener('scroll', revealSections);
    
    // Ajusta imagens para mobile
    function adjustImages() {
        const sobreImgs = document.querySelectorAll('.sobre-img');
        const windowWidth = window.innerWidth;
        
        if (windowWidth < 768) {
            sobreImgs.forEach(img => {
                img.style.float = 'none';
                img.style.margin = '0 auto 1.5rem';
                img.style.maxWidth = '100%';
            });
        } else {
            sobreImgs.forEach(img => {
                img.style.float = 'left';
                img.style.margin = '0 1.5rem 1rem 0';
                img.style.maxWidth = '300px';
            });
        }
    }
    
    // Executa ao carregar e ao redimensionar
    window.addEventListener('load', adjustImages);
    window.addEventListener('resize', adjustImages);
    
    // Ativa link atual na navegação
    const currentPage = location.pathname.split('/').pop().replace('.html', '') || 'index';
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkPage = link.getAttribute('href').replace('.html', '');
        if (linkPage === currentPage || (currentPage === 'index' && linkPage === '')) {
            link.classList.add('active');
        }
    });
    
    // Validação do formulário de contato
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação simples
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;
            
            if (nome && email && mensagem) {
                alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
                contactForm.reset();
            } else {
                alert('Por favor, preencha todos os campos obrigatórios.');
            }
        });
    }
    
    // Efeito hover nos itens da galeria
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const caption = this.querySelector('.gallery-caption');
            caption.style.backgroundColor = 'rgba(198, 40, 40, 0.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            const caption = this.querySelector('.gallery-caption');
            caption.style.backgroundColor = '';
        });
    });
});
