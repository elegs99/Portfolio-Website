$(document).ready(function(){
    // check scroll position
    // hide popup
    $('.popup-content').hide();
    $('.project1').hide();
    $('.project2').hide();
    $('.project3').hide();
    // add header background when scrolling
    // add scroll up botton when scrolling
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500 && !($('.overlay').hasClass("show"))){
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
        strings: ["a Student.", "a Programmer.", " your Next Hire.",],
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
    $('.grid-item3').click(function(){
        $('.overlay').show()
        $('.project3').show()
        $('.popup-content').show()
        $('.scroll-up-btn').removeClass("show");
        $('body').css('overflow','hidden')
    });
    // add new popup here

    // close popup
    $('.close-btn').click(function(){
        $('.overlay').hide();
        $('.project1').hide();
        $('.project2').hide();
        $('.project3').hide();
        // add new project hide
        $('.popup-content').hide();
        $('.scroll-up-btn').addClass("show");
        $('body').css('overflow','auto')
    });
    $('.overlay').click(function(event){
        var $target = $(event.target);
        if(!$target.closest('.popup-content').length){
            $('.overlay').hide();
            $('.project1').hide();
            $('.project2').hide();
            $('.project3').hide();
            // add new project hide
            $('.popup-content').hide();
            $('.scroll-up-btn').addClass("show");
            $('body').css('overflow','auto')
        }
    });

});

// Code for slideshow modified from https://www.w3schools.com/howto/howto_js_slideshow.asp
// increment second index by 1
var slideIndex = [1,2];

// Add mySlides4
var slideId = ["mySlides1", "mySlides2", "mySlides3"]

// 7 > highest num of slides, 3 num of slideshows
// add showSlides(7, 3)
showSlides(7, 2);
showSlides(7, 1);
showSlides(7, 0);

// Next/previous controls
function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}
// show correct image
function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}