'use strict';

function Tab (rawDataObj) {
  this.title = rawDataObj.title;
  this.body = rawDataObj.body;
}

Tab.all = [];

Tab.loadAll = function(rawData) {
  rawData.forEach(function(ele) {
    Tab.all.push(new Tab(ele));
  });
};

// TODO: insert if statement
Tab.fetchAll = function() {
  $.getJSON('../data/tab-data.json', function(data) {
    Tab.loadAll(data);
  });
  tabView.initIndexPage();
};
