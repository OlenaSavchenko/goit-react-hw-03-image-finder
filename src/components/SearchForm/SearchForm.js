import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css';

class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    searchData: '',
  };

  handleDataSearch = event => {
    const inputDataValue = event.currentTarget.value;
    this.setState({ searchData: inputDataValue });
  };

  handleDataSubmit = event => {
    event.preventDefault();
    const { searchData } = this.state;
    const normalizeSearchData = searchData.toLowerCase();
    this.props.onSubmit(normalizeSearchData);
    this.reset();
  };

  reset = () => {
    this.setState({ searchData: '' });
  };

  render() {
    const { searchData } = this.state;
    return (
      <form className="SearchForm" onSubmit={this.handleDataSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchData}
          onChange={this.handleDataSearch}
        />
      </form>
    );
  }
}
export default SearchForm;
