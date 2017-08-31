'use strict';
var app = app || {};

(function(module) {
  const repos = {};

  repos.all = [];
  repos.commits = []

  repos.requestRepos = function(callback) {

    $.ajax({
      url: 'https://api.github.com/user/repos',
      method: 'GET',
      headers: { Authorization: `token ${githubToken}` },
      success: function(data) {

        data.forEach(function(repo) {
          repos.all.push(repo.name)

          $.ajax({
            url: `${repo.commits_url}`.slice(0, -6),
            method: 'GET',
            headers: { Authorization: `token ${process.env.PORT}` }
          })
          .then(data => repos.commits.push(data.length))
          // .then(data => data.forEach(repo => console.log(repo.commit)

        });
      }
    })
    callback();
    console.log(repos.commits);
    console.log(repos.all);
  };


//   .then(data => data.forEach(repo => repos.all.push(repo),

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
