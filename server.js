'use strict';

const pg = require('pg');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const requestProxy = require('express-request-proxy');

const conString = process.env.DATABASE_URL || 'postgres://localhost:5432'; // DONE: Don't forget to set your own conString
const client = new pg.Client(conString);

app.use(express.static('./public'));

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

app.get('/github/*', proxyGitHub);

app.listen(PORT);
