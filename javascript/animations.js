$(document).ready(function() {


    const sections = $('section');
    const navItems = $('.nav-item');


 /*scroll do site */


    $(window).on('scroll', function () {
       const header = $('header');
       const scrollPosition = $(window).scrollTop() + header.outerHeight ();

       let activeSectionIndex = 0;




       if (scrollPosition <= 0) {
          header.css('box-shadow', 'none');     /* box shadow em baixo do navbar*/
          }
         else {
            header.css('box-shadow', '5px 1px  5px  rgba(0, 0, 0 ,0.1')
        
       }

       sections.each(function(i) {
        const section = $(this);
        const sectionTop = section.offset().top - 96;
        sectionBottom = sectionTop+ section.outerHeight();


        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            activeSectionIndex = i
            return false;
        }
       })
       navItems.removeClass('active');
       $(navItems[activeSectionIndex]).addClass('active');
    });


 /* animacoes*/

 
    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,                      /* queee iraAAdooo meu deus eu to passando mal ces nao tao ligado*/
        distance: '20%'
    });



     ScrollReveal().reveal('#banner', {
        origin: 'right',
        duration: 2000,                   
        distance: '20%'

    });


    ScrollReveal().reveal('.shape', {
        origin: 'right',
        duration: 2000,                   
        distance: '20%'

    });
});

function abrirFoto(caminho) {
        const modal = document.getElementById('modal-galeria');
        const fotoAmpliada = document.getElementById('foto-ampliada');
        
        if (modal && fotoAmpliada) {
            fotoAmpliada.src = caminho;
            modal.showModal();
        } else {
            console.error("Erro: Elementos do modal não encontrados!");
        }
    }

    function fecharFoto() {
        const modal = document.getElementById('modal-galeria');
        if (modal) {
            modal.close();
        }
    }

    // Fecha o modal se clicar no fundo escuro (opcional)
    const modalGaleria = document.getElementById('modal-galeria');
    if (modalGaleria) {
        modalGaleria.addEventListener('click', (e) => {
            if (e.target === modalGaleria) modalGaleria.close();
        });
    }