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

    $("#double-game").click(function(){
        window.open('https://pairs-game.kokos.su', '_blank');
        return false;
    });

    $("#students-db").click(function(){
        window.open('https://students-db.kokos.su', '_blank');
        return false;
    });

    $('.close-callback-offer-form').click(function () {
		$('.black-layer').fadeOut(400);
		$('body').toggleClass('scroll-off');
	});
	
	$('.callback-offer, .learn-more-button').click(function () {
        if($(this).attr('class').substring(0,17) == 'learn-more-button') {
            $('.form-header').html("Заказ проекта");
            $('.additional-data-inputs').show();
        }
        else{
            $('.form-header').html("Заказ звонка");
            $('.additional-data-inputs').hide();
        }
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

    $('.submit-callback-offer-form').click(function () {
        var email_pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;

        if($('.input-email').val().length > 0){
            if(email_pattern.test($('.input-email').val()) === false)alert("Пожалуйста, укажите корректный e-mail!");
        }
		if($('.input-phone').val().length === 0 ) alert("Пожалуйста, укажите корректный номер телефона!");

        else if($('.input-name').val().length > 0 ){
            var formData = $("#callback-form").serialize();
            $.post("callback-offer.php", formData, function( data ) { //  передаем и загружаем данные с сервера с помощью HTTP запроса методом POST
                $('.callback-offer-form').html('<p class="form_header">' + data + '</p><p><sup>Это сообщение исчезнет автоматически.</sup></p> <p><button type="button" onClick="window.location.reload();">Закрыть</button></p>');
            });
            setTimeout(location.reload.bind(location), 3000);
        } 

	});

    function resize_figure (window_width) {

        var figure_size = Math.round(Math.sqrt((window_width * window_width) / 2)) + 100; 
        var coord_x_correct = 160;

        if(window_width > 940){
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

        else if(window_width > 660){

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
        
        if(window_width > 390) coord_x_correct = 0;
        
        $('.figure-bg').attr("transform", "translate(" + Math.round(figure_size / 2 - coord_x_correct) + ", " + Math.round(figure_size / 2) + ") rotate(45 " + Math.round(figure_size / 2) + " " + Math.round(figure_size / 2) + ")");
        
        $('.figure-bg-rect').attr({
            'rx'    : Math.round(figure_size / 4),
            'ry'    : Math.round(figure_size / 4),
            'width' : figure_size,
            'height': figure_size 
        });
        }
    }

    var lastWidth = $(window).width();

    $(window).resize(function(){
        if($(window).width() !== lastWidth){
            resize_figure ($(window).width());
            lastWidth = $(window).width();
        }
     });      

    $(document).ready(function(){

        $("#callback-form").submit(function(event){
          /*  
          var formData = $( form ).serialize(); // создаем переменную, которая содержит закодированный набор элементов формы в виде строки
            $.post( "callback-offer.php", formData, function( data ) { //  передаем и загружаем данные с сервера с помощью HTTP запроса методом POST
              //alert( data ); // вставляем в элемент <div> данные, полученные от сервера
               $('.callback-offer-form').html('<p class="form_header">' + data + '</p><p><sup>Это сообщение исчезнет автоматически.</sup></p> <p><button type="button" onClick="window.location.reload();">Закрыть</button></p>');
              setTimeout(location.reload.bind(location), 3000);
            });
        */
            return false;
        });

        resize_figure ($(window).width());

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
                530:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });

        $('.input-phone').mask("+7 (999) 999 99 99");
    });
});
