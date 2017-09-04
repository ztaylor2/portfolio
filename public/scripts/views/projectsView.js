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

  projectsView.projects = function(repos, commits) {
    $('#projects > p').hide();
    for(var i = 0; i < repos.length; i++) {
      $('#projects').append(
        `<p>${repos[i]} has ${commits[i]}  commits.</p>`
      )
    }
  }

  module.projectsView = projectsView;
})(app);
