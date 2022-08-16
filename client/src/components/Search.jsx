import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  //this bound to index.jsx
  search() {
    this.props.onSearch(this.state.term);
  }

  //i added onclick callback fn and event argument

  render() {
    return (
    <div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={this.state.term} onChange={(e) => this.onChange(e)}/>
      <button onClick={()=>this.search()}> Add Repos </button>
    </div>)
  }
}

export default Search;