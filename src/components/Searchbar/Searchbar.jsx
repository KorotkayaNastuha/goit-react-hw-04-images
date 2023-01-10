import PropTypes from 'prop-types';
import css from '../Searchbar/Searchbar.module.css';
import React, { Component } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

export  class SearchBar extends Component  {
    state = {
        queryString: '',
    };
    handleChange = (event) => {
    this.setState({queryString:event.currentTarget.value})
}
    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.queryString);
        this.setState({ queryString: '' });

}
 render() {
   return <header className={css.searchbar}>
  <form className={css.searchForm} onSubmit={this.handleFormSubmit}>
    <button type="submit" className={css.searchFormBtn}>
               <BiSearchAlt className={css.BiSearchAlt} />
    </button>

    <input
      className={css.searchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={this.handleChange}
      value={this.state.queryString}
    />
  </form>
</header>
}
}
SearchBar.propTypes = {
    onSubmit: PropTypes.func,
}