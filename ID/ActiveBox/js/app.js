$(function () {
  let header = $(".JSheader");
  let intro = $(".JSintro");
  let introH = intro.innerHeight();
  let ScrollPos = $(window).scrollTop();

  checkScroll(ScrollPos, introH);

  // fixed header
  $(window).on("scroll resize", function () {
    introH = intro.innerHeight();
    ScrollPos = $(this).scrollTop();
    checkScroll(ScrollPos, introH);
  });

  function checkScroll(ScrollPos, introH) {
    if (ScrollPos > introH-67) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  // navToggle
  navToggle = $(".jsToggle");
  nav = $(".jsNav");

  navToggle.on("click", function (event) {
    event.preventDefault();
    nav.toggleClass("show");
  });

  // smooth scroll
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    let ElemID = $(this).data("scroll");
    let ElemOffset = $(ElemID).offset().top;

    nav.removeClass("show");

    $("html, body").animate(
      {
        scrollTop: ElemOffset - 66,
      },
      700
    );
  });

  // slider https://kenwheeler.github.io/slick/
  let review_slider = $(".review_slider");

  review_slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1, 
    fade: true,
    arrows: false,
    dots:true
  });
});
