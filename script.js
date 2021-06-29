$(document).ready(function(){
    // check scroll position
    // hide popup
    $('.popup-content').hide();
    $('.project1').hide();
    $('.project2').hide();
    // add header background when scrolling
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    // Toggle menu button
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // opens and closes popup
    $('.grid-item1').click(function(){
        $('.overlay').show()
        $('.project1').show()
        $('.popup-content').show()
        $('body').css('overflow','hidden')
    });
    $('.grid-item2').click(function(){
        $('.overlay').show()
        $('.project2').show()
        $('.popup-content').show()
        $('body').css('overflow','hidden')
    });
    $('.close-btn').click(function(){
        $('.overlay').hide();
        $('.project1').hide();
        $('.project2').hide();
        $('.popup-content').hide();
        $('body').css('overflow','auto')
    });
});