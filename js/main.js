$(document).ready(function () {
    $(".scrollBox").niceScroll({
        cursorcolor: "#000",
        cursorwidth: 4,
        scrollspeed: 60,
        cursorborderradius: 0,
        mousescrollstep: 40,
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        background: "none",
        cursorborder: "none",
        autohidemode: true,
        boxzoom: false,
        smoothscroll: true,
        zindex: 9999
    });

    $('#header .ham').on('click',function () {
        $('#scene02').fadeIn();
    });


    $('#scene02 .close').on('click',function () {
        $('#scene02').fadeOut();
    });

    $('#spin_off .spb1').on('click',function () {
        $('#scene03').fadeIn();
    });


    $('#scene03 .close').on('click',function () {
        $('#scene03').fadeOut();
    });


    $('#spin_off .spb2').on('click',function () {
        $('#scene04').fadeIn();
    });

    $('#scene04 .close').on('click',function () {
        $('#scene04').fadeOut();
    });

    $('#cast .bryan').on('click',function () {
        $('#scene05').fadeIn();
        multiScroll();
    });

    $('#scene05 .close').on('click',function () {
        $('#scene05').fadeOut();
    });

    $('#series .seri_01').on('click',function () {
        $('#scene06').fadeIn();
    });

    $('#scene06 .close').on('click',function () {
        $('#scene06').fadeOut();
    });

    function multiScroll(){
        var top = 0;

        $(document).ready(function () {
            var contentHeight = $('.scroll_right').height(),
                contents = $('.scroll_right .scroll_content').length;

            top = (0 - (contentHeight * (contents/2 - 1)));
                // top = (0 - 6556);
                
            $('.scroll_right').css('top', top + 'px');
        });

        $(window).resize(function () {
            var contentHeight = $('.scroll_right').height(),
                contents = $('.scroll_right .scroll_content').length;
                
            top = (0 - (contentHeight * (contents/2 - 1)));
            // top = (0 - 6556);
            debugger;
            $('.scroll_right').css('top', (top + $(window).scrollTop()) + 'px');
        });

        $(window).scroll(function () {
            $('.scroll_right').css('top', (top + $(window).scrollTop()) + 'px');
        });
    }

});

$(function () {
    $(".naviJs > li > a, .topBtn").click(function () {
        var b = $($(this).attr("href")).position().top;
        var a = $(".gnb").innerHeight();
        $(".scrollBox").stop().animate({scrollTop: b - a}, 1200, "easeInOutExpo");
        return false
    });
    $(".scrollBox").scroll(function () {
        var a = $(".scrollBox").scrollTop();
        $(".posNum").text(a);
        if (a >= 1) {
            // $("").addClass("on");

        } else {
            // $("").removeClass("on");

        }
        $(".wrap > div").each(function (c) {
            var d = 100;
            var b = $(".wrap > div:first").position().top;
            var e = $(this).position().top;
            if (a <= b - d) {
                $(".naviJs").each(function () {
                    $("li", this).removeClass("on").eq(0).addClass("on")
                })
            } else {
                if (a >= e - d) {
                    $(".naviJs").each(function () {
                        $("li", this).removeClass("on").eq(c).addClass("on")
                    })
                }
            }
        })
    })
});

(function ($) {
    

})(jQuery);