import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import './SearchBar.scss';

class SearchInput extends Component {
    render() {
        return (
            <input className='search-text' type="text" placeholder={'Type to search'}/>
        );
    }
}

// SearchInput.propTypes = {};

export default SearchInput;
