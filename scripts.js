$(function(){
    $('.burger-button').click( function(){
        $('.main-navbar').slideToggle();
        $(this).hide();
        $('body').toggleClass('scroll-off');
    });
    $('.main-navbar__link').click( function(){ 
        if($(window).width() <= 1250){
            $('.main-navbar').slideToggle();
            $('.burger-button').show();
            $('body').toggleClass('scroll-off');    
        }

    });

    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    $('.close-callback-offer-form').click(function () {
		$('.black-layer').fadeOut(400);
		$('body').toggleClass('scroll-off');
	});
	
	$('.callback-offer, .learn-more-button').click(function () {
		$('.black-layer').fadeIn(400);
		$('body').toggleClass('scroll-off');
	});
	
	$('.black-layer').click(function (e) {
		if (e.target == this){
			$(this).fadeOut(400);
			$('body').toggleClass('scroll-off');
		}
	});
        
    $('.my-works-controls').bind('click', function(){  
            if($(this).attr('class')=='my-works-controls right-arrow') {
                $(".my-works" ).trigger('next.owl.carousel');
            }
            else{
                $(".my-works" ).trigger('prev.owl.carousel');
            }
    });

    $( "form" ).submit(function(){
        var formData = $( this ).serialize(); // создаем переменную, которая содержит закодированный набор элементов формы в виде строки

        $.post( "callback-offer.php", formData, function( data ) { //  передаем и загружаем данные с сервера с помощью HTTP запроса методом POST
          allert( data ); // вставляем в элемент <div> данные, полученные от сервера
        })
      });

    $(document).ready(function(){
        var figure_size = $(window).width();
        var coord_x_correct = 160;
        figure_size = Math.round(Math.sqrt((figure_size * figure_size) / 2)) + 100; 

        $('.my-works').owlCarousel({
            rtl:false,
            loop:true,
            margin:10,
            nav:false,
            autoplay:true,
            autoplayTimeout:10000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });

        $('.input-phone').mask("+7 (999) 999 99 99");

        if($(window).width() > 940){
            $('.top-flying-tags__item').css({
            'font-size'             : '34px',
            'transition-property'   : 'font-size rotate translate',
            'transition-duration'   : '1s',
            'width': '100px'
            });

        $('.figure-bg').attr("transform", "translate(120, 160) rotate(50 450 450)");

        $('.figure-bg-rect').attr({
            'rx'    : 250,
            'ry'    : 250,
            'width' : 900,
            'height': 900
        });
    }
    else if($(window).width() > 660){

        $('.top-flying-tags__item').css({
            'font-size'             : '23px',
            'transition-property'   : 'font-size rotate translate',
            'transition-duration'   : '1s',
            'width': '68px'
        }); 

        $('.figure-bg').attr("transform", "translate(100, 140) rotate(45 300 300)");

        $('.figure-bg-rect').attr({
            'rx'    : 150,
            'ry'    : 180,
            'width' : 600,
            'height': 600
        });
    }else{
        $('.top-flying-tags__item').css({
            'font-size'             : '18px',
            'transition-property'   : 'font-size rotate translate',
            'transition-duration'   : '1s',
            'width': '50px'
        }); 
        
        if($(window).width() > 390) coord_x_correct = 0;
        
        $('.figure-bg').attr("transform", "translate(" + Math.round(figure_size / 2 - coord_x_correct) + ", " + Math.round(figure_size / 2) + ") rotate(45 " + Math.round(figure_size / 2) + " " + Math.round(figure_size / 2) + ")");
        
        $('.figure-bg-rect').attr({
            'rx'    : Math.round(figure_size / 4),
            'ry'    : Math.round(figure_size / 4),
            'width' : figure_size,
            'height': figure_size 
        });
    }
    });
});
