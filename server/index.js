const express = require('express');
let app = express();
let helper = require('../helpers/github.js');
let db = require('../database');

app.use(express.json())
app.use(express.static(__dirname + '/../client/dist'));

/////////////////////////   POST   ///////////////////////////////

app.post('/repos', (req, res) => {
  console.log(`received ${req.method} request for`, req.body)
  res.send('hello post req')

  helper.getReposByUsername(req, (err, data) => {
    if(err) {
      console.log(err)
    } else {
      //data = pulled repos.
      console.log('RECIVED SOME DATA')
      data.forEach((repo) => {
        let repoObj =
        {
          id: repo.owner.id,
          username: repo.owner.login,
          repo: repo.name,
          rating: repo.stargazers_count,
        }
        db.save(repoObj);
      })
    }
  })

  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

/////////////////////////   GET   ///////////////////////////////

app.get('/repos', (req, res) => {

  console.log(`received ${req.method} request`)
  db.get(req, res);

  // TODO - your code here!
  // This route should send back the top 25 repos
});

/////////////////////////////////////////////////////////////////

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

