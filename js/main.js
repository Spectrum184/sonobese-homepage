// Lets be professional, shall we?
"use strict";

$(document).ready(function () {
  //preload
  $(window).on("load", function () {
    $(".preloader").fadeOut("slow");
  });

  // Scroll and show navbar shrink
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 90) {
      $(".navbar").addClass("navbar-shrink");
      $(".navbar-brand").removeClass("hide-element");
      $(".navbar-brand").addClass("show-element");
    } else {
      $(".navbar").removeClass("navbar-shrink");
      $(".navbar-brand").removeClass("show-element");
      $(".navbar-brand").addClass("hide-element");
    }
  });

  // Scroll and show button back home
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 360) {
      $("#btn-back-home").removeClass("hide-icon");
      $("#btn-back-home").addClass("show-icon");
    } else {
      $("#btn-back-home").removeClass("show-icon");
      $("#btn-back-home").addClass("hide-icon");
    }
  });

  //navbar collapse
  $(".nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  //policy carousel
  $(".policy-carousel").owlCarousel({
    loop: false,
    rewind: true,
    margin: 0,
    responsiveClass: true,
    autoplay: true,
    animateIn: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  });

  // Product carousel
  $(".product-carousel").owlCarousel({
    loop: false,
    rewind: true,
    margin: 0,
    responsiveClass: true,
    autoplay: true,
    animateIn: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 4,
        nav: true,
        loop: false,
      },
    },
  });

  // Page scrolling
  $.scrollIt({
    topOffset: -50,
  });

  //toggle theme
  function updateIcon() {
    if ($("body").hasClass("dark")) {
      $(".toggle-theme i").removeClass("fa-moon");
      $(".toggle-theme i").addClass("fa-sun");
    } else {
      $(".toggle-theme i").removeClass("fa-sun");
      $(".toggle-theme i").addClass("fa-moon");
    }
  }

  function toggleTheme() {
    var bodyTheme = localStorage.getItem("sonobe");
    if (bodyTheme !== null) {
      if (bodyTheme === "dark") {
        $("body").addClass("dark");
      } else {
        $("body").removeClass("dark");
      }
    }
    updateIcon();
  }

  toggleTheme();

  $(".toggle-theme").on("click", function () {
    $("body").toggleClass("dark");
    if ($("body").hasClass("dark")) {
      localStorage.setItem("sonobe", "dark");
    } else {
      localStorage.setItem("sonobe", "light");
    }
    updateIcon();
  });
});
