'use strict';

var tabView = {};

// render handlebars template
let template = Handlebars.compile($('#article-template').text());

// drop down menu
tabView.dropdownMenu = function() {
  $('.fa').on('click', function() {
    $('div.navLinks').slideToggle();
  });
};

tabView.carousel = function() {
  // $('#carousel').css('background-image', 'url("../me.jpg")');

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

// set up nav bar
tabView.navigationTabs = function() {
  $('nav').on('click', 'a', function(e) {
    e.preventDefault();
    var $id = $(this).attr('id');
    for(let i = 0; i < Tab.all.length; i++) {
      if($id === Tab.all[i].title) {
        const activeTab = template(Tab.all[i]);
        $('#tabs *').hide();
        $('#tabs').append(activeTab);
      }
    }
  });
};

tabView.initIndexPage = function() {
  tabView.dropdownMenu();
  tabView.carousel();
  tabView.navigationTabs();
};
