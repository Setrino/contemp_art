$(document).ready(function(){

    $('.inner_block').hide();
    $(".inner_block").eq(0).show();
    $('body').animate({backgroundColor : '#9f24db'}, 2000);
    $('#center_block').animate({width: '60%'}, 2000, function(){$('body').css('overflow', 'auto');});

    var scroll = true;
    var prevScroll = 0;
    var prevTime = new Date($.now());
    var prevLvl = 0;
    var currentLvl = 0;

    $('nav').mouseenter(function(){
        $(this).animate({
            top: 0
        }, 500);
    });

    $('nav').mouseleave(function(){
        $(this).animate({
            top: -38
        }, 500);
    });

    $(document).keydown(function(e) {
        switch(e.keyCode){
            case 38:
                if(currentLvl > 0 && scroll){
                    prevLvl = currentLvl;
                    currentLvl--;
                    scrollNav(-$(".left_nav").height());
                }
                break;
            case 40:
                if(currentLvl < 3 && scroll){
                    prevLvl = currentLvl;
                    currentLvl++;
                    scrollNav($(".left_nav").height());
                }
                break;
        }
    });

    $('.gallery').click(function(){
        $('nav ul li a').removeClass('active');
        $(this).addClass('active');
        prevLvl = currentLvl;
        currentLvl = 2;
        scrollNav((currentLvl - prevLvl) * $(".left_nav").height());
    });

    $('.info').click(function(){
        $('nav ul li a').removeClass('active');
        $(this).addClass('active');
        prevLvl = currentLvl;
        currentLvl = 1;
        scrollNav((currentLvl - prevLvl) * $(".left_nav").height());
    });

    $('.welcome').click(function(){
        $('nav ul li a').removeClass('active');
        $(this).addClass('active');
        prevLvl = currentLvl;
        currentLvl = 0;
        scrollNav((currentLvl - prevLvl) * $(".left_nav").height());
    });

    $('.credits').click(function(){
        $('nav ul li a').removeClass('active');
        $(this).addClass('active');
        prevLvl = currentLvl;
        currentLvl = 3;
        scrollNav((currentLvl - prevLvl) * $(".left_nav").height());
    });

    $(window).scroll(function(event) {

        var tt = new Date($.now());
        var st = window.pageYOffset;

        if(scroll){
            if (st > prevScroll && (tt - prevTime > 300)){
                if(currentLvl < 3){
                    prevLvl = currentLvl;
                    currentLvl++;
                    scrollNav($(".left_nav").height());
                }
            } else {
                if(currentLvl > 0 && (tt - prevTime > 300)){
                    prevLvl = currentLvl;
                    currentLvl--;
                    scrollNav(-$(".left_nav").height());
                }
            }
        }
        prevScroll = st;
        prevTime = tt;
    });

    function scrollNav(scrollDir){
        scroll = false;
        pageChange();
        navChange();
        $(".left_nav, .right_nav").animate({
                top : parseFloat($(".left_nav").css('top')) + scrollDir
            }, function(){  setTimeout(function(){scroll = true;}, 500); });
        }

    function navChange(){
        $('nav ul li a').removeClass('active');
        $('nav ul li a:eq(' + currentLvl + ')').addClass('active');
    }

    function pageChange(){

        switch(currentLvl){
            case 0:
                $('body').animate({backgroundColor : '#9f24db'});
                $('#center_block').animate({width: '60%'});
                $('.top_block').animate({'padding-top': '50px', 'padding-bottom': '25px', width: '60%', top: '0px'});
                $('.bottom_block').animate({width: '70%', margin: '0 auto'});
                $('.inner_block').animate({position: 'relative', width: '72%', margin: '0 auto', float: 'left'});
                $('.right_image').animate({left: '0px'});
                $('.left_image').animate({left: '0px', 'z-index': 6});
                $('.inner_block').hide();
                $(".inner_block").eq(0).show();
                break;
            case 1:
                $('body').animate({backgroundColor : '#00fd63'});
                $('#center_block').animate({width: '65%'});
                $('.top_block').animate({'padding-top': '35px', 'padding-bottom': '25px', top: '0px'});
                $('.bottom_block').animate({width: '70%', margin: '0 auto', 'margin-top': '25px'});
                $('.inner_block').animate({width: '72%', 'padding-top': '0px'});
                $('.right_image').animate({left: '0px'});
                $('.left_image').animate({left: '0px', 'z-index': 6});
                $('.inner_block').hide();
                $(".inner_block").eq(1).show();
                break;
            case 2:
                $('body').animate({backgroundColor : '#ffff01'});
                $('#center_block').animate({width: '90%', margin: '0 auto', height: 'auto', overflow: 'auto'});
                $('.top_block').animate({'padding-top': '25px', width: '55%', margin: '0 auto', 'padding-bottom': '25px', top: '0px'});
                $('.inner_block').animate({position: 'relative', width: '81%', float: 'left', 'padding-top': '25px'});
                $('.bottom_block').css('margin-top', 70);
                $('.bottom_block').animate({width: '70%', top: 0, 'padding-top': 0});
                $('.right_image').animate({left: '0px'});
                $('.left_image').animate({left: '0px', 'z-index': 6});
                $('.inner_block').hide();
                $(".inner_block").eq(2).show();
                break;
            case 3:
                var botTop = ($(window).height() > 800) ? 152 : -3;
                $('body').animate({backgroundColor : '#c9158e'});
                $('#center_block').animate({width: '100%', height: $(document).height(), margin: '0 auto', position: 'relative',
                    overflow: 'hidden'});
                $('.top_block').animate({'padding-top': '0', 'padding-bottom': '25px', width: '75%', margin: '0 auto', top: '-50px'});
                $('.inner_block').animate({position: 'relative', width: '83%', margin: '0 auto', 'padding-top': '25px'});
                $('.bottom_block').css('margin-top', 0);
                $('.bottom_block').animate({width: '83%', 'padding-top': '25px', top : botTop});
                $('.right_image').animate({left: '44px'});
                $('.left_image').animate({left: '-44px', 'z-index': 6});
                $('.inner_block').hide();
                $(".inner_block").eq(3).show();
                break;
        }
    }
});