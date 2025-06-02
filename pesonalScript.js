
$(function(){

    var el1 = $('.logo').offset().top
    var el2 = $('.abMe').offset().top
    var el3 = $('.myWork').offset().top
    var el4 = $('.social').offset().top

    var con1 = $('.abMep').offset().top
    var con2 = $('.hbt').offset().top
    var con3 = $('.fa-solid').offset().top
    var con4 = $('.hbtp').offset().top
    var con5 = $('.sbt1').offset().top
    var con6 = $('.sbt2').offset().top
    var con7 = $('.sbt3').offset().top

    var con8 = $('.social').offset().top
    var con9 = $('.fbx1').offset().top
    var con10 = $('.fbx2').offset().top
    var con11 = $('.fbx3').offset().top
    var con12 = $('.detail').offset().top

    // console.log(el1, el2, el3)


    $('.btn1').click(function(){
        $('html, body').animate({scrollTop: el1 - 100}, 500)
        return false
    })

    $('.btn2').click(function(){
        $('html, body').animate({scrollTop: el2 - 50}, 500)
        return false
    })

    $('.btn3').click(function(){
        $('html, body').animate({scrollTop: el3 - 50}, 500)
        return false
    })

    $('.btn4').click(function(){
        $('html, body').animate({scrollTop: el4}, 500)
        return false
    })

    $('.toTop').click(function(){
        $('html, body').animate({scrollTop: 0}, 500)
        return false
    })
    
    $(window).scroll(function(){

        var N = $(window).scrollTop()

        if(N > 200){
            $('.toTop').fadeIn(300)
        }
        else{
            $('.toTop').stop().fadeOut(200)
        }

        if(N > el2 - 600){
            $('.abMe').animate({opacity:'1'}, 300)
        }
        if(N > con1 - 600){
            $('.abMep').animate({opacity:'1'}, 300)
        }
        if(N > con2 - 600){
            $('.hbt').animate({opacity:'1'}, 300)
        }
        if(N > con3 - 600){
            $('.fa-solid').animate({opacity:'1'}, 300)
        }
        if(N > con4 - 600){
            $('.hbtp').animate({opacity:'1'}, 300)
        }
        if(N > el3 - 600){
            $('.myWork').animate({opacity:'1'}, 300)
        }
        if(N > con5 - 600){
            $('.sbt1').animate({opacity:'1'}, 300)
        }
        if(N > con6 - 600){
            $('.sbt2').animate({opacity:'1'}, 300)
        }
        if(N > con7 - 600){
            $('.sbt3').animate({opacity:'1'}, 300)
        }       
        if(N > con8 - 900){
            $('.social').animate({opacity:'1'}, 300)
        }
        if(N > con9 - 600){
            $('.fbx1').animate({opacity:'1'}, 300)
        }
        if(N > con10 - 600){
            $('.fbx2').animate({opacity:'1'}, 300)
        }
        if(N > con11 - 600){
            $('.fbx3').animate({opacity:'1'}, 300)
        }
        if(N > con12 - 600){
            $('.detail').animate({opacity:'1'}, 300)
        }


    })
  

})







