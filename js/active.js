(function ($) {
    "use strict";
    $(document).ready(function () {


        if($.fn.slick){
            // Slick Slider for Hero Area
            $('.w_img_slide').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                asNavFor: '.w_content_slide',
                autoplay: false,
                autoplaySpeed: 4000,
                useTransform: true,


            });

            $('.w_content_slide').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '.w_img_slide',
                dots: true,
                arrows: false,
                useTransform: true,

            });

            $('.w_img_slide').on('beforeChange', function (event, slick, currentSlide) {
                $('.single_slide').removeClass('animated zoomIn').addClass('hidden');
            });

            $('.w_img_slide').on('afterChange', function (event, slick, currentSlide) {
                $('.single_slide').removeClass('hidden').addClass('animated zoomIn');
            });


            $('.w_content_slide').on('beforeChange', function (event, slick, currentSlide) {
                $('.slick-slide .w_content > *').addClass('hidden').removeClass('animated fadeInUp');
            });

            $('.w_content_slide').on('afterChange', function (event, slick, currentSlide) {
                $('.slick-current .w_content > *').removeClass('hidden').addClass('animated fadeInUp');
            });
        }


        if($.fn.magnificPopup){
            // magnificPopup for image popUp
            $('.portfolio_img').magnificPopup({
                type: 'image',
                mainClass: 'mfp-with-zoom', // this class is for CSS animation below
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true, // By default it's false, so don't forget to enable it

                    duration: 300, // duration of the effect, in milliseconds
                    easing: 'ease-in-out', // CSS transition easing function

                    // The "opener" function should return the element from which popup will be zoomed in
                   //  and to which popup will be scaled down
                  //   By defailt it looks for an image tag:
                    opener: function (openerElement) {
                        // openerElement is the element on which popup was initialized, in this case its <a> tag
                       //  you don't need to add "opener" option if this code matches your needs, it's defailt one.
                        return openerElement.is('img') ? openerElement : openerElement.find('img');
                    }
                }

            });
        }


        if($.fn.isotope){
            // jquery.nav.js For smooth scroll
            $('.portfolio_menu li').on('click', function () {

                $(".portfolio_menu li").removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr('data-filter');
                $(".portfolio_items").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });
        }

        // map script js

        var myCenter = new google.maps.LatLng(23.810332, 90.412518);

        function initialize() {
            var mapProp = {
                center: myCenter,
                scrollwheel: false,
                zoom: 12,
                zoomControl: false,
                mapTypeControl: false,
                streetViewControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [{
                    "featureType": "landscape",
                    "stylers": [{
                        "saturation": -100
                    }, {
                        "lightness": 65
                    }, {
                        "visibility": "on"
                    }]
                }, {
                    "featureType": "poi",
                    "stylers": [{
                        "saturation": -100
                    }, {
                        "lightness": 51
                    }, {
                        "visibility": "simplified"
                    }]
                }, {
                    "featureType": "road.highway",
                    "stylers": [{
                        "saturation": -100
                    }, {
                        "visibility": "simplified"
                    }]
                }, {
                    "featureType": "road.arterial",
                    "stylers": [{
                        "saturation": -100
                    }, {
                        "lightness": 30
                    }, {
                        "visibility": "on"
                    }]
                }, {
                    "featureType": "road.local",
                    "stylers": [{
                        "color": "#fff"
                    }, {
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "transit",
                    "stylers": [{
                        "saturation": -100
                    }, {
                        "visibility": "simplified"
                    }]
                }, {
                    "featureType": "administrative.province",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "on"
                    }, {
                        "color": "#f6f6f6"
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#1EBDF4"
                    }, {
                        "visibility": "on"
                    }]
                }]
            };

            var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

            var marker = new google.maps.Marker({
                position: myCenter,
                icon: 'img/locate.png'
            });
            marker.setMap(map);
        }

        google.maps.event.addDomListener(window, 'load', initialize);


        if($.fn.slicknav){
            // Slicknav for Mobile Menu
            $('.menu_bar').slicknav({
                label: '',
                prependTo: ".mobile_menu",
            });
        }



        if($.fn.onePageNav){

            // One Page Nav for smooth scroll
            $('.main_menu').onePageNav({
                currentClass: 'active',
                changeHash: false,
                scrollSpeed: 750,
                scrollThreshold: 0.5,
                filter: '',
                easing: 'swing',
                begin: function () {
                    //I get fired when the animation is starting
                },
                end: function () {
                    //I get fired when the animation is ending
                },
                scrollChange: function ($currentListItem) {
                    //I get fired when you enter a section and I pass the list item of the section
                }
            });
        }

        // Sticky Menu  
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 10) {
                $('.header_area').addClass('sticky');
                $('.header_area').removeClass('active');
            } else {
                $('.header_area').removeClass('sticky');
                $('.header_area').addClass('active');
            }

        });


        jQuery(".slicknav_nav ul li a").on('click', function () {
            jQuery('.menu_bar').slicknav('close');
        });
    });

    $(window).load(function () {

        if($.fn.waypoint){
        $('.skill_wraper').waypoint(function () {
                $('#bar1').barfiller({
                    barColor: "#1EBDF4"
                });
                $('#bar2').barfiller({
                    barColor: "#1EBDF4"
                });
                $('#bar3').barfiller({
                    barColor: "#1EBDF4"
                });
                $('#bar4').barfiller({
                    barColor: "#1EBDF4"
                });
                $('#bar5').barfiller({
                    barColor: "#1EBDF4"
                });
                $('#bar6').barfiller({
                    barColor: "#1EBDF4"
                });

            }, {
                offset: '75%'
            });
        }


        if($.fn.isotope){
        // Isotope Js for masonry Isotope..
            $('.portfolio_items').isotope({
                itemSelector: '.single_portfolio',

                masonry: {
                    columnWidth: 100,
                }
            });
        }


        $('#loading').fadeOut(300);


    });
})(jQuery);