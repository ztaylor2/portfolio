'use strict';
var app = app || {};

(function(module) {
  const repos = {};

  repos.all = [];
  repos.commits = []
  repos.log = function() {
    console.log(repos.all);
    console.log(repos.commits);
  }

  repos.requestRepos = function(callback) {

    $.get('github/user/repos')
    .then(function(data) {
      data.forEach(function(repo) {
        repos.all.push(repo.name)
        $.get(`${repo.commits_url}`.slice(0, -6))
        .then(data => repos.commits.push(data.length)).then(app.projectsView.projects(repos.all, repos.commits))
      })
    })
    .then(callback);

  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
