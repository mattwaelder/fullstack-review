import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  search (term) {
    console.log(`${term} was searched`);
    //make get request for repos
    axios.post('/repos', {username: term})
    .then((data) => console.log('view recieved', data))
    .catch((err) => console.log(err))
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }

  componentDidMount() {
    axios.get('./repos')
    .then((data) => console.log('RECIEVED REPOS', data))
    .catch((err) => console.log(err))
  }
}

ReactDOM.render(<App />, document.getElementById('app'));