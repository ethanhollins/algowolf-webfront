$(function(e) {
    "use strict";
    e(".animsition").animsition(), e(".nav-col").matchHeight(), e(".counter").counterUp({
        delay: 10,
        time: 1e3
    }), e(".owl-carousel-single").owlCarousel({
        loop: !0,
        navRewind: !1,
        margin: 10,
        dots: !0,
        nav: !1,
        autoplay: !1,
        navText: [],
        items: 1
    }), Swiper(".swiper-container", {
        loop: !0,
        pagination: ".swiper-pagination",
        paginationClickable: !0,
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev"
    }), e(".swiper-slide", "#swiper").each(function() {
        var o = e(this).data("slide-img");
        e(this).css("background-image", "url(" + o + ")")
    }), e("[data-toggle='tooltip']").tooltip();
    var o = {
        delay: 200,
        duration: 600,
        distance: "60px",
        easing: "ease-in-out",
        rotate: {
            z: 0
        },
        scale: 1
    };
    window.sr = ScrollReveal(), sr.reveal(".one-step", o, 500), e("#animated-text").textillate({
        loop: !0
    }), e(window).on("scroll resize", function() {
        return e(window).scrollTop() >= 75 ? void e("body").addClass("body-scrolled") : e("body").removeClass("body-scrolled")
    })
});