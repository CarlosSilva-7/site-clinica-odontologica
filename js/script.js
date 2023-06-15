$(function(){
    
    //MOSTRAR-ESCONDER MENU MOBILE
    var botao = $('.fa-sharp');
    var menuMobile = $('.nav-mobile');
    $(botao).click(function () { 
        $(menuMobile).slideToggle();
    });
    //MOSTRAR-ESCONDER MENU MOBILE


    //SLIDES BANNER PRINCIPAL COM PLUGIN SLICK
    $('.mosaico .mosaico-wraper').slick({
        centerMode: false, //propriedade para mostrar as 'beiradinhas' dos proximos slides
        slidesToShow: 6, //propriedade para indicar a quatidade de slides que estarao visiveis
        arrows: false, // propriedade para as 'setinhas' para clicar e avançar os slides
        responsive:[// aqui tenho uma array com varios objetos para passar valores para um slide responsivo
            {breakpoint:768, // propriedade equivalente a mediaquery do css
                settings: //propriedade como objetos dos valores que p slide passara a ter quando chegar nas dimensoes especificadas
                {
                centerMode: true,
                slidesToShow: 3,
                arrows: false
                }
            },
            {breakpoint:580,
                settings:
                {
                centerMode: true,
                arrows: false,
                slidesToShow: 2
                }
            }
        ]

    });
    // FIM SLIDES BANNER PRINCIPAL COM PLUGIN SLICK

    //SLIDES SECTION TRATAMENTOS
    $('.tratamentos .tratamento-container').slick({
        centerMode: false,
        slidesToShow:3,
        arrows: false,
        infinite: false,
        dots: true,
        responsive:[
            {
            breakpoint:780,
            settings:{
            centerMode: false,
            slidesToShow:2,
            dots: true,
            arrows: false,
            infinite: false,
            }
        },
        {
            breakpoint:580,
            settings:{
            centerMode: true,
            dots: true,
            slidesToShow:1,
            arrows: false,
            infinite: false,
            }
        }
    ]
    });

    //FIM SLIDES SECTION TRATAMENTOS

    // SLIDES SECTION DEPOIMENTOS
    $('.depoimentos .center').slick({
        centerMode: false,
        slidesToShow:3,
        arrows: false,
        infinite: false,
        dots: true,
        responsive:[
            {
            breakpoint:780,
            settings:{
            centerMode: false,
            slidesToShow:2,
            dots: true,
            arrows: false,
            infinite: false,
            }
        },
        {
            breakpoint:580,
            settings:{
            centerMode: true,
            dots: true,
            slidesToShow:1,
            arrows: false,
            infinite: false,
            }
        }
    ]
    });
    //FIM SLIDES SECTION DEPOIMENTOS
 
});