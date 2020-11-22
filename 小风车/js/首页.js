$(function(){
    $(".li1").mouseenter(function(){
        $(this).children(".ul2").show()
    })
    $(".li1").mouseleave(function(){
        $(this).children(".ul2").hide()
    })
    $(".li2").mouseenter(function(){
        $(this).children(".ul3").show()
    })
    $(".li2").mouseleave(function(){
        $(this).children(".ul3").hide()
    })
    $("#mobile-nav-taggle").click(function () {
        var mobileMenu = $("#mobile-menu");
        console.log(mobileMenu.hasClass("show-nav"))
        if (mobileMenu.hasClass("show-nav")) {
            setTimeout(function () {
                mobileMenu.addClass("hide-nav").removeClass("show-nav");
            }, 100)
        }
        else {
            setTimeout(function (){
                mobileMenu.addClass("show-nav").removeClass("hide-nav");
            }, 100)
        }
    })
    $(".slide-one").click(function(){
        $("#myCarousel").carousel(0);
    });
    $(".slide-two").click(function(){
        $("#myCarousel").carousel(1);
    });
    $(".slide-three").click(function(){
        $("#myCarousel").carousel(2);
    });
    $(".slide-three").click(function(){
        $("#myCarousel").carousel(3);
    });
    $(".div5").click(function(){
        $(this).siblings().toggle(500)
    })
})
var galleryThumbs = new Swiper('.gallery-thumbs', {

    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    thumbs: {
      swiper: galleryThumbs
    }
  });