'use strict';

var websiteView = {};

// drop down menu
websiteView.dropdownMenu = function() {
  $('.fa').on('click', function() {
    $('div.navLinks').slideToggle();
  });
};

websiteView.carousel = function() {
  // $('#carousel').css('background-image', 'url("../me.jpg")');

  var index = 0;
  var imgList = [$('#1'), $('#2'), $('#3'), $('#4')];

  console.log(imgList);

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

// set up nav bar
websiteView.navigationTabs = function() {
  $('nav').on('click', 'a', function(e) {
    e.preventDefault();
    var $id = $(this).attr('id');
    $('section').hide();
    $('.' + $id).fadeIn(200);
  });

  // on page load click first item in nav
  $('nav a:last').click();
};

$(document).ready(function() {
  websiteView.navigationTabs();
  websiteView.dropdownMenu();
  websiteView.carousel();
});
