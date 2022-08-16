const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

//make mongoose schema
let repoSchema = mongoose.Schema({
  id: Number,
  username: String,
  repo: String,
  rating: Number,
});

//compile mongoose schema into model
let Repo = mongoose.model('Repo', repoSchema);

//can add methods to method prop of mongoose model (classes)
//eg a method for pulling "top" 25 repos?
//this.getTopRepos() ??


//each document (a class based on schema) has a save method
//which takes err 1st and saves to db
let save = (data) => {
  // This function should save a repo or repos to
  // the MongoDB

  //decided to do this in the controller (not my job)
  // data.forEach((repo) => {
    // repo = new Repo({
    //   id: repo.owner.id,
    //   username: repo.owner.login,
    //   repo: repo.name,
    //   rating: repo.stargazers_count,
    // })

    repo = new Repo(data)
    repo.save((err, success) => {
      err ? conole.log(err) : console.log('successful post')
    })
  // })
}
//insertAll();
//////////////////////// GET ///////////////////////////

let get = (req, res) => {
  Repo.find((err, data) => {
    err ? console.log(err) : res.send(data);
  })
}

module.exports.save = save
module.exports.get = get

//schema is the plan, each repo is a subclass of schma, but are they all stored in Repo or is there supposed to be something wrapping the Repo documents?