import React, { Component } from 'react';
import { Input } from 'reactstrap';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  render() {
    return (
      <div className = "search-bar col-md-6">
        <Input
          placeholder = "Search projects by technology"
          value = { this.state.term }
          onChange = { event => this.setState({ term: event.target.value }) } />
      </div>
    );
  }
}

export default SearchBar;
