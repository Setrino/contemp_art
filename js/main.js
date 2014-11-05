$(document).ready(function(){

    var scroll = true;
    var prevScroll = 0;
    var prevTime = new Date($.now());
    var currentLvl = 0;
    var timeout = true;

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
            console.log(st + '       ' + window.pageYOffset);
            if (st > prevScroll && (tt - prevTime > 300)){
                if(currentLvl < 2){
                    currentLvl++;
                    scrollNav($(".left_nav").height());
                }
            } else {
                if(currentLvl > 0 && (tt - prevTime > 300)){
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
        $(".left_nav, .right_nav").animate({
                top : parseFloat($(".left_nav").css('top')) + scrollDir
            }, function(){ setTimeout(function(){scroll = true;}, 500); });
        }
});