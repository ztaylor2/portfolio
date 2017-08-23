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

// const about = {
//   title: "About",
//   body: "This is some info about me!"
// };
//
// const projects = {
//   title: "Projects",
//   body: "This is some info about me!"
// };



// set up nav bar
websiteView.navigationTabs = function() {
  $('nav').on('click', 'a', function(e) {
    e.preventDefault();
    var $id = $(this).attr('id');
    console.log($id);

    let asdf = null;

    if($id === 'about') {
      asdf = {
        title: "About",
        body: "This is some info about me!"
      };;
    }

    if($id === 'projects') {
      asdf = {
        title: "Projects",
        body: "Here are some of my projects!"
      };
    }

    if($id === 'skills') {
      asdf = {
        title: "Skills",
        body: "Here are some of my skills!"
      };
    }

    let template = Handlebars.compile($('#article-template').text());
    const temp = template(asdf);
    console.log(temp);
    $('#articles *').hide();
    $('#articles').append(temp);

    // $('.' + $id).fadeIn(200);
  });

  // on page load click first item in nav
  $('nav a:last').click();
};

$(document).ready(function() {
  websiteView.navigationTabs();
  websiteView.dropdownMenu();
  websiteView.carousel();
});
