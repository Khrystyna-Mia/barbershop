window.addEventListener('load', function () {
    new Glider(document.querySelector(".glider"), {
      slidesToShow: 1,
      arrows: {
        prev: ".glider__prev",
        next: ".glider__next",
      },
      draggable: false,
      dots: ".glider__dots",
    });
  });