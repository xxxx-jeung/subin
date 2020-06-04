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

    $('#menu').on('click',function () {
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