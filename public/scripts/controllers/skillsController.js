'use strict';
var app = app || {};

(function(module) {
  const skillsController = {};

  skillsController.init = function() {
    let template = Handlebars.compile($('#article-template').text());
    const skills = template(app.Tab.all[2]);

    $('#tabs *').hide();
    $('#tabs').append(skills);
  };

  module.skillsController = skillsController;
})(app);
