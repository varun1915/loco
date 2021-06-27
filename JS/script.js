// Adding Appearing effect in header navigation bar
$(document).ready(function(){
    'use strict';
    $(window).scroll(function(){
        'use strict';
        if($(window).scrollTop() < 650)
        {
            $('.navbar-default-css').css({
                'margin-top' : '-100px',
                'opacity' : '0'
            });
        }
        else
        {
            $('.navbar-default-css').css({
                'margin-top' : '0px',
                'opacity' : '1',
                'background-color': 'rgba(59,59,59,0.97)',
                'transition' : '0.5s'
            });
        }
    });
}); 


// Add Smooth Scrolling Effect
$(document).ready(function(){
    // Add smooth scrolling to all links
    $(".nav-link .back-to-top").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 100, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

// Active menu item on click
$(document).ready(function(){
    'use strict';
    $('.nav-link').click(function(){
        'use strict'

        $('.nav-link').removeClass("active");
        $(this).addClass('active');
    });
});

// highlight menu item on scroll
// $(document).ready(function(){
//     'use strict';
//     $(window).scroll(function(){
//         'use strict';
//         $('section').each(function(){
//             'use strict'
//             var bb = $(this).attr("id");
//             var hei = $(this).outerHeight();
//             var grttop = $(this).offset().top -70;
//             if($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei){
//                 $("nav-item a[href = '#" + bb + "']").addClass("active");
//             }
//             else{
//                 $("navbar-nab li a[href = '#" + bb + "']").removeClass("active");
//             }
//         });
//     });
// });

// add auto padding to header
$(document).ready(function(){
    'use strict';
    setInterval(function(){
        'use strict';
        var windowHeight = $(window).height();
        var containerHeight = $(".header-container").height();
        var padTop = windowHeight-containerHeight;
        $(".header-container").css({
            'padding-top' : Math.abs(Math.round(padTop/6)) + 'px',
            'padding-bottom' : Math.abs(Math.round(padTop/6)) + 'px'
        });
    }, 10)
});

// Add Slider to screen
$(document).ready(function(){
    $('.slider').bxSlider({
        slideWidth: 292.5,
        auto: true,
        minSlides: 1,
        maxSlides: 2,
        slideMargin: 50,
        
    });
});

// Add animation | Initialize wow
$(document).ready(function(){
    'use strict'
    new WOW().init();
});

// @media only screen and (max-width: 500px) {
     
// }
    