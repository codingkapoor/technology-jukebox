import React, { Component } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import AutoSuggest from 'react-autosuggest';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      suggestions: []
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    let suggestions = getSuggestions(value, this.props.technologiesSearchPool);
    this.setState({ suggestions });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Search projects by technologies",
      value,
      onChange: this.onChange
    };

    return (
      <div className = "search-bar col-lg-8 col-lg-offset-2">
        <Form onSubmit = { this.onFormSubmit }>
          <FormGroup className = "search-form">
            <AutoSuggest
              suggestions = { suggestions }
              onSuggestionsFetchRequested = { this.onSuggestionsFetchRequested }
              onSuggestionsClearRequested = { this.onSuggestionsClearRequested }
              getSuggestionValue = { getSuggestionValue }
              renderSuggestion = { renderSuggestion }
              inputProps = { inputProps } />
            <Button color = "primary">
              <i className = "fa fa-search" aria-hidden = "true"></i>
            </Button>
          </FormGroup>
        </Form>
      </div>
    );
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.onSearchTermChange(this.state.value);
  }

}

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value, technologies) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return technologies.filter(technology => regex.test(technology.name));
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span>{ suggestion.name }</span>
  );
}
