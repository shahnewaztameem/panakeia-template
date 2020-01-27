var scroll = new SmoothScroll('a[href*="#"]');

$(window).scroll(function(){
    var top = $(window).scrollTop();
    if(top>=112) {
        $("header").addClass('color-scroll');
    }
    else{
        if($("header").hasClass('color-scroll')){
            $("header").removeClass('color-scroll')
        }
    }
});
                 
