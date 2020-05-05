const header = document.querySelector("#header");
const upper = document.querySelector("#upper");

$(window).scroll(function () {
  if ($(document).scrollTop() > 100) {
    header.classList.add("scrolled");
    upper.classList.add("show");
  } else {
    header.classList.remove("scrolled");
    upper.classList.remove("show");
  }
});

const smootScroll = new SmoothScroll('a[href*="#"]', { offset: 50 });

$("#portofolio-carousel").slick({
  autoplay: true,
  arrows: false,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
