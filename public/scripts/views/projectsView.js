'use strict';
var app = app || {};

(function(module) {
  const projectsView = {};

  let render = Handlebars.compile($('#repo-template').text());

  projectsView.index = function() {
    $('#projects').append(
      app.repos.with('name').map(render)
    );
  };

  module.projectsView = projectsView;
})(app);
