const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

//make mongoose schema
let repoSchema = mongoose.Schema({
  id: Number,
  username: String,
  repos: Array,
});

//compile mongoose schema into model
let Repo = mongoose.model('Repo', repoSchema);

//can add methods to method prop of mongoose model (classes)
//eg a method for pulling "top" 25 repos?
//this.getTopRepos() ??


//each document (a class based on schema) has a save method
//which takes err 1st and saves to db
let save = (err, data) => {
  // This function should save a repo or repos to
  // the MongoDB
  if (err) {
    console.log('failed to write', err)
  } else {
    console.log('database updated with', data)
  }

}

module.exports.save = save;