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

 const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
	counter.innerText = '0';

	const updateCounter = () => {
		const target = +counter.getAttribute("data-target");
		const c = +counter.innerText;

		const increment = target / 200;
		if(c < target){
			counter.innerText = `${Math.ceil(c + increment)}`;
			setTimeout(updateCounter, 1);
		}else {
			counter.innerText = target;
		}
	};
	updateCounter();
});
