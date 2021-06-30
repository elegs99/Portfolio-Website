$(document).ready(function(){
    // check scroll position
    // hide popup
    $('.popup-content').hide();
    $('.project1').hide();
    $('.project2').hide();
    // add header background when scrolling
    // add scroll up botton when scrolling
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Toggle menu button
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing animation
    var typed = new Typed(".typing", {
        strings: ["a Student", "a Programmer", " your Next Hire"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Opens and closes popup
    $('.grid-item1').click(function(){
        $('.overlay').show()
        $('.project1').show()
        $('.popup-content').show()
        $('.scroll-up-btn').removeClass("show");
        $('body').css('overflow','hidden')
    });
    $('.grid-item2').click(function(){
        $('.overlay').show()
        $('.project2').show()
        $('.popup-content').show()
        $('.scroll-up-btn').removeClass("show");
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