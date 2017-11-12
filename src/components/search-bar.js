import React, { Component } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  render() {
    return (
      <div className = "search-bar col-md-6">
        <Form onSubmit = { this.onFormSubmit }>
          <FormGroup>
            <Input
              placeholder = "Search projects by technologies"
              value = { this.state.term }
              onChange = { event => this.setState({ term: event.target.value }) } />
          </FormGroup>
          <Button color="primary">
            <i className="fa fa-search" aria-hidden="true"></i>
          </Button>
        </Form>
      </div>
    );
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.onSearchTermChange(this.state.term);
  }

}

export default SearchBar;
