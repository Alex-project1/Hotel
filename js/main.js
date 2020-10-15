$(function() {


    $('.slider__inner').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1500,
        fade: false,
        speed: 1000,
        prevArrow: '<button class="slick-arrow slick-prev"> <img src="img/slider/prev.svg" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"> <img src="img/slider/next.svg" alt=""></button>',

    });

    $('.partners__inner').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 1500,
        fade: false,
        speed: 1000,
        prevArrow: '<button class="slick-arrow slick-prev"> <img src="img/slider/prev.svg" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"> <img src="img/slider/next.svg" alt=""></button>',
        responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
                dots: true,
            }
        },
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 1,
                dots: false,
                arrows: true,
            }
        },

    ]

    });

    $('.works__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: '<button class="slick-arrow slick-prev"> <img src="img/slider/prev.svg" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"> <img src="img/slider/next.svg" alt=""></button>',
        responsive: [{
                breakpoint: 911,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 681,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 455,
                settings: {
                    slidesToShow: 1
                }
            },

        ]
    });

    $('.about__wrapper .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.about__wrapper').find('.tab-item').removeClass('active-tab').hide();
            $('.about__wrapper .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
        });


        $("form").submit(function() { //Change
			var th = $(this);
			$.ajax({
				type: "POST",
				url: "mail.php", //Change
				data: th.serialize()
			}).done(function() {
				alert("Thank you!");
				setTimeout(function() {
					// Done Functions
					th.trigger("reset");
				}, 1000);
			});
			return false;
        });
        
        $('.header__menu-btn').on('click', function() {
            $('.header__menu > ul').slideToggle();
        });
    
        $('.header__drop-down.drop-down').on('click', function() {
            $(this).children('.drop-down__list').toggleClass('active');
            $(this).children('.drop-down__link').toggleClass('active');
        });
    
        new WOW().init()        
      
});