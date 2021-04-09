var dictionary, set_lang;

$(document).ready(function () {
  // Lets be professional, shall we?
  "use strict";

  //preload
  $(window).on("load", function () {
    $(".preloader").fadeOut("slow");
  });

  // Scroll and show navbar shrink
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 90) {
      $(".navbar").addClass("navbar-shrink");
    } else {
      $(".navbar").removeClass("navbar-shrink");
    }
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

  // Function for swapping dictionaries
  set_lang = function (dictionary) {
    $("[data-translate]").text(function () {
      var key = $(this).data("translate");
      if (dictionary.hasOwnProperty(key)) {
        return dictionary[key];
      }
    });
  };

  // Swap languages when menu changes
  $("#lang").on("change", function () {
    var language = $(this).val().toLowerCase();
    if (dictionary.hasOwnProperty(language)) {
      set_lang(dictionary[language]);
    }
  });

  // Set initial language to English
  set_lang(dictionary.japanese);
});

dictionary = {
  japanese: {
    "_navbar-company": "園部製作所",
    "_navbar-introduce": "紹介",
    "_navbar-product": "製品",
    "_navbar-equipment": "設備",
    "_navbar-activity": "活動",
    "_navbar-address": "アドレス",
    "_home-company": "株式会社園部製作所",
    "_home-text":
      "弊社では、新型コロナウイルスの感染拡大防止の観点からお客様、従業員、関係先等の皆様の安全・安心を第一に考え県指導に基づいた対応を実施、継続しております。",
  },
  english: {
    "_navbar-company": "Sonobese",
    "_navbar-introduce": "Introduce",
    "_navbar-product": "Product",
    "_navbar-equipment": "Equipment",
  },
};

// create animate
