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
        200:{
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

$(function() {
    var selectedClass = "";
    $(".fil-cat").click(function(){ 
    selectedClass = $(this).attr("data-rel"); 
     $("#portfolio").fadeTo(100, 0.1);
    $("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $("#portfolio").fadeTo(300, 1);
    }, 300); 
    
  });
  });
  
  $(document).ready(function(){
  $('.toolbar button').click(function(){
    $('button').removeClass("active-portfolio");
    $(this).addClass("active-portfolio");
  });
  });

  $(document).ready(function(){
  $("#heading").click(function(){
    $("#problem-toggle").toggle(200);
  });
});


$(document).ready(function(){
    $("#management").click(function(){
      $("#management-toggle").toggle(200);
    });
  });

  $(document).ready(function(){
    $("#inverment").click(function(){
      $("#inverment-toggle").toggle(200);
    });
  });


// progress

$('.skill-per').each(function(){
  var $this = $(this);
  var per =$this.attr('per');
  $this.css("width",per+"%");
  
});
