$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplayTimeout:9000,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


// aos animation


 AOS.init();