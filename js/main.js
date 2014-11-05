$(document).ready(function(){

    $('.inner_block').hide();
    $(".inner_block").eq(0).show();

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

    $(window).mousedown(function(){
        console.log("NA");
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
        $(".left_nav, .right_nav").animate({
                top : parseFloat($(".left_nav").css('top')) + scrollDir
            }, function(){  setTimeout(function(){scroll = true;}, 500); });
        }

    function pageChange(){
        console.log("LVL " + currentLvl);

        switch(currentLvl){
            case 0:
                $('#center_block').animate({width: '60%'});
                $('.top_block').animate({'padding-top': '50px', 'padding-bottom': '35px'});
                $('.bottom_block').animate({width: '70%', margin: '0 auto'});
                $('.inner_block').animate({position: 'relative', width: '72%', margin: '0 auto', float: 'left'});
                $('.inner_block').hide();
                $(".inner_block").eq(0).show();
                break;
            case 1:
                $('#center_block').animate({width: '65%'});
                $('.top_block').animate({'padding-top': '25px', 'padding-bottom': '35px'});
                $('.bottom_block').animate({width: '70%', margin: '0 auto', 'margin-top': '25px'});
                $('.inner_block').animate({width: '72%', 'padding-top': '0px'});
                $('.inner_block').hide();
                $(".inner_block").eq(1).show();
                break;
            case 2:
                $('#center_block').animate({width: '90%', margin: '0 auto', height: 'auto'});
                $('.top_block').animate({'padding-top': '25px', width: '55%', margin: '0 auto', 'padding-bottom': '25px'});
                $('.inner_block').animate({position: 'relative', width: '81%', float: 'left', 'padding-top': '25px'});
                $('.bottom_block').animate({width: '70%', 'margin-top': '70px'});
                $('.inner_block').hide();
                $(".inner_block").eq(2).show();
                break;
            case 3:
                console.log(($('#center_block').width()
                    * 0.17 / 2));
                $('#center_block').animate({width: '100%', height: '725px', margin: '0 auto', position: 'relative',
                    overflow: 'hidden'});
                $('.top_block').animate({'padding-top': '0', 'padding-bottom': '25px', width: '75%', margin: '0 auto'});
                $('.inner_block').animate({position: 'relative', width: '76%', margin: '0 auto'});
                //$('.bottom_block').css('position', 'fixed');
                $('.bottom_block').animate({width: '83%', margin: '0 auto', 'padding-top': '25px', top: 138});
                 $('.right_image').animate({left: '44px'});
                $('.left_image').animate({position: 'absolute', left: '-44px', 'z-index': 6});
                $('.inner_block').hide();
                $(".inner_block").eq(3).show();
                break;
        }
    }
});