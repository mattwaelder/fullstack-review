const axios = require('axios');
const config = require('./config.js');

let getReposByUsername = (req, callback) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API
  console.log('SEARCHING FOR', req.body.username)
  // The options object has been provided to help you out,
  // but you'll have to fill in the URL

    let options = {
      url: `https://api.github.com/users/${req.body.username}/repos`,
      headers: {
        'User-Agent': 'request',
        'Authorization': `token ${config.TOKEN}`
      }
    }

  axios.get(options.url, options)
  .then((res) => {
    let repositories = [];
    res.data.forEach((repo) => repositories.push(
      repo
      // {
      // id: repo.owner.id,
      // username: repo.owner.login,
      // repo: repo.name,
      // rating: repo.stargazers_count,
      // }
    ));
    callback(null, repositories)
  })
  .catch((err) => console.log(err))
}

module.exports.getReposByUsername = getReposByUsername;