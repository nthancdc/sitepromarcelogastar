document.addEventListener('DOMContentLoaded', function() {
    // Efeito no botão de revolução
    const revolutionBtn = document.getElementById('revolution-btn');
    
    revolutionBtn.addEventListener('click', function() {
        // Altera o texto do botão
        this.textContent = 'A revolução começou!';
        
        // Efeito visual
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0 0 15px rgba(198, 40, 40, 0.7)';
        
        // Cria efeito de manifesto revolucionário
        const manifesto = document.createElement('div');
        manifesto.className = 'dialogue';
        manifesto.innerHTML = `
            <p><span class="speaker">Manifesto:</span> Trabalhadores do mundo, uni-vos! O conhecimento é poder e o poder deve pertencer ao povo!</p>
            <p><span class="speaker">Sócrates:</span> A verdadeira sabedoria está em reconhecer que a justiça social é a mais elevada forma de virtude.</p>
        `;
        
        // Insere antes do rodapé
        document.querySelector('main').appendChild(manifesto);
        
        // Rolagem automática para o manifesto
        manifesto.scrollIntoView({ behavior: 'smooth' });
        
        // Efeito de mudança de cores
        setTimeout(() => {
            document.body.style.transition = 'background-color 2s ease';
            document.body.style.backgroundColor = '#f0e6e6';
            
            // Restaura após 3 segundos
            setTimeout(() => {
                document.body.style.backgroundColor = '';
            }, 3000);
        }, 500);
    });
    
    // Efeito de digitação no título
    const title = document.querySelector('header h1');
    const originalText = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typingEffect = setInterval(() => {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
        } else {
            clearInterval(typingEffect);
        }
    }, 100);
    
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
    
    // Efeito nas imagens da galeria
    const imageCards = document.querySelectorAll('.image-card');
    
    imageCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const caption = this.querySelector('.image-caption');
            caption.style.backgroundColor = 'rgba(198, 40, 40, 0.9)';
            caption.style.color = 'white';
        });
        
        card.addEventListener('mouseleave', function() {
            const caption = this.querySelector('.image-caption');
            caption.style.backgroundColor = '';
            caption.style.color = '';
        });
    });
});
