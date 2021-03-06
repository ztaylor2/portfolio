'use strict';
var app = app || {};

(function(module) {
  const projectsController = {};

  projectsController.init = function() {
    let template = Handlebars.compile($('#article-template').text());
    const projects = template(app.Tab.all[1]);

    $('#tabs *').hide();
    $('#tabs').append(projects);

    app.repos.requestRepos(app.projectsView.index)
  };

  module.projectsController = projectsController;
})(app);
