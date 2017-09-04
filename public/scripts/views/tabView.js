'use strict';

var app = app || {};

(function(module){

  var tabView = {};

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
    tabView.carousel();
  };

  module.tabView = tabView;
})(app);
