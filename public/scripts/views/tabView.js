'use strict';

var app = app || {};

(function(module){

  var tabView = {};

  // drop down menu
  // tabView.dropdownMenu = function() {
  //   $('.fa').on('click', function() {
  //     $('div.navLinks').slideToggle();
  //   });
  // };

  tabView.carousel = function() {
    var index = 0;
    var imgList = [$('#1'), $('#2'), $('#3'), $('#4')];

    $('.button-right').on('click', function() {
      index++;
      $('.slide').hide();
      if(index === 4) {
        index = 0;
      }
      imgList[index].show();
    });

    $('.button-left').on('click', function() {
      index--;
      $('.slide').hide();
      if(index === -1) {
        index = 3;
      }
      imgList[index].show();
    });

    $('.slide').hide();
    imgList[index].show();
  };

  tabView.initIndexPage = function() {
    // tabView.dropdownMenu();
    tabView.carousel();
  };

  module.tabView = tabView;
})(app);
