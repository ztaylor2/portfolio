'use strict';
var app = app || {};

(function(module) {
  const repos = {};

  repos.all = [];
  repos.commits = []

  repos.requestRepos = function(callback) {

    $.get('github/user/repos')
    .then(function(data) {
      data.forEach(function(repo) {
        repos.all.push(repo.name)
        $.get(`${repo.commits_url}`.slice(0, -6))
        .then(data => repos.commits.push(data.length))
      }) // closes for each
    }) // closes then
    .then(callback);

    console.log(repos.all);
    console.log(repos.commits);

    // $.ajax({
    //   url: 'https://api.github.com/user/repos',
    //   method: 'GET',
    //   headers: { Authorization: `token ${process.env.GITHUB_TOKEN}` },
    //   success: function(data) {
    //
    //       // .then(data => data.forEach(repo => console.log(repo.commit)
    //
    //     });
    //   }
    // })

  };

//   .then(data => data.forEach(repo => repos.all.push(repo),

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
