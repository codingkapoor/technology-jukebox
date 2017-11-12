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
          placeholder = "Search projects by technologies"
          value = { this.state.term }
          onChange = { event => this.onInputChange(event.target.value) } />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
