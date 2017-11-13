import React, { Component } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import AutoSuggest from 'react-autosuggest';

const languages = [
  {name: "Akka"},
  {name: "BootStrap"},
  {name: "CSS3"},
  {name: "ES6"},
  {name: "Grunt"},
  {name: "HTML5"},
  {name: "Java"},
  {name: "JavaScript"},
  {name: "JQuery"},
  {name: "NPM"},
  {name: "React"},
  {name: "Redux"},
  {name: "Resteasy"},
  {name: "RequireJS"},
  {name: "SASS"},
  {name: "Scala"},
  {name: "SigmaJS"},
  {name: "Spring"},
  {name: "Spring Boot"}
];

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return languages.filter(language => regex.test(language.name));
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
  );
}

class SearchBar extends Component {
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
    console.log(this.state);
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
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
              suggestions={suggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={inputProps} />
            <Button color="primary">
              <i className="fa fa-search" aria-hidden="true"></i>
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

export default SearchBar;
