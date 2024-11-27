
$(function(){

    var el1 = $('.logo').offset().top
    var el2 = $('.abMe').offset().top
    var el3 = $('.myWork').offset().top
    var el4 = $('.social').offset().top

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
  
  
})







