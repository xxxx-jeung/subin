$(document).ready(function () {
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
        $(function () {
            // var king_text = document.getElementById('right_king_text');
            // var king_text1 = document.getElementById('king_text1');
            // var king_text2 = document.getElementById('king_text2');
            // var king_text3 = document.getElementById('king_text3');
            // var parallaxInstance = new Parallax(king_text, {
            //     scalarX: 5.5,
            //     scalarY: 10.0
            // });
            // var parallaxInstance = new Parallax(king_text1, {
            //     scalarX: 5.5
            // });
            // var parallaxInstance = new Parallax(king_text2, {
            //     scalarX: 6.5
            // });
            // var parallaxInstance = new Parallax(king_text3, {
            //     scalarX: 7.5
            // });
            // parallaxInstance
            //parallaxInstance.friction(0.2, 0.2);
            //parallaxInstance.scalar(5, 5);
        });
    });

    $('#scene05 .close').on('click',function () {
        $('#scene05').fadeOut();
    });

    $('#series .seri_01').on('click',function () {
        $('#scene06').fadeIn();
        getNiceScroll();
    
    });

    $('#scene06 .close').on('click',function () {
        $('#scene06').fadeOut();
    });

    function multiScroll(){
        var top = 0;

        $(document).ready(function () {
            var contentHeight = $('.scroll_right').height(),
                contents = $('.scroll_right .scroll_content').length;

            top = (0 - 2373);       
            $('.scroll_right').css('top', top + 'px');
        });

        $(window).resize(function () {
            var contentHeight = $('.scroll_right').height(),
                contents = $('.scroll_right .scroll_content').length;
                
            top = (0 - 2373);
            $('.scroll_right').css('top', (top + $(window).scrollTop()) + 'px');
        });

        $(window).scroll(function () {
            $('.scroll_right').css('top', (top + $(window).scrollTop()) + 'px');
            
        });

        $(window).scroll(function() {
            if (1435.5 <= Math.ceil($('#right_king_text').offset().top)) {
                $("#king_text1").addClass('king_text1_on');
                $("#king_text2").addClass('king_text2_on');
                $("#king_text3").addClass('king_text3_on');
                $("#king_text1").removeClass('king_text1_off');
                $("#king_text2").removeClass('king_text2_off');
                $("#king_text3").removeClass('king_text3_off');
            } else {
                $("#king_text1").addClass('king_text1_off');
                $("#king_text2").addClass('king_text2_off');
                $("#king_text3").addClass('king_text3_off');
                $("#king_text1").removeClass('king_text1_on');
                $("#king_text2").removeClass('king_text2_on');
                $("#king_text3").removeClass('king_text3_on');
            }
        });
    }
    
    function getNiceScroll(){
        $("#scene06").on('mousewheel',function(e){
            var wheelDelta = e.originalEvent.wheelDelta;
    
            if(wheelDelta > 0){
                console.log("up");
                $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
            }else{
                console.log("down");
                $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
            }
        });
    }

    

});




