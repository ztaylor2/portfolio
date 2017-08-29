'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.init = function() {
    app.Tab.fetchAll();

    let template = Handlebars.compile($('#article-template').text());
    const about = template(app.Tab.all[0]);

    $('#tabs *').hide();
    $('#tabs').append(about);
  };

  module.aboutController = aboutController;
})(app);
