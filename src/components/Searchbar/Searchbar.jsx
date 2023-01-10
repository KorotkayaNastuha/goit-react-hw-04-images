import PropTypes from 'prop-types';
import css from '../Searchbar/Searchbar.module.css';
import  { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

export function SearchBar({ onSubmit }) {
  const [queryString, setQueryString] = useState('');

  const  handleChange = (event) => {
    setQueryString(event.currentTarget.value)
}
  const  handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(queryString);
        setQueryString('');

}

   return <header className={css.searchbar}>
  <form className={css.searchForm} onSubmit={handleFormSubmit}>
    <button type="submit" className={css.searchFormBtn}>
               <BiSearchAlt className={css.BiSearchAlt} />
    </button>

    <input
      className={css.searchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={handleChange}
      value={queryString}
    />
  </form>
</header>
}

SearchBar.propTypes = {
    onSubmit: PropTypes.func,
}