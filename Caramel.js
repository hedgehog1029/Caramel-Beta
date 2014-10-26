/*
 *  Caramel © 2014 : ALL RIGHTS RESERVED
 *
 *  PUBLISHED UNDER [ CC-NC 3.0 AU ]
 *  https://creativecommons.org/licenses/by-nc/3.0/au/
 *
 *  HTML/CSS    - @kurisubrooks
 *  JAVASCRIPT  - @Penagwin
 *  FONTAWESOME - @DaveGandy - http://fontawesome.io/
 */

// TALONS PLS FIX ME

$(document).ready(function() {

// Navbar Collapse

    $(".nav .bar").css({"display": "block"});   
     //On resize style the nav bars
        $(window).resize(function() {
            if ($(window).width() >= 600) {
                $(".bar li").css({
                    "display": "inline-block"
                });
                $(".bar .collapse").css({
                    "display": "none"
                });

            } else {

                $(".bar .collapse").css({"display": "block"});
                $(".bar li").css({ "display": "none"});
                $(".bar").css({"max-height": "inherit"});
            }
        }); 

        //On Expand Pressed
        $(".bar .collapse").click(function() {
            $(this).siblings('a').children('li').slideToggle('medium');
            $(".bar li").css({"display": "block"});

        });

        //Force a resize to init.
        $(window).resize();
    });
