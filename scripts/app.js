'use strict';

var websiteView = {};

// drop down menu
websiteView.dropdownMenu = function() {
  // $('.fa').on('click', function() {
  //   $('nav ul').slideToggle();
  // });
  // $('nav ul').hide();
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
  $('nav a').click();
};





$(document).ready(function() {
  websiteView.navigationTabs();
  websiteView.dropdownMenu();
});
