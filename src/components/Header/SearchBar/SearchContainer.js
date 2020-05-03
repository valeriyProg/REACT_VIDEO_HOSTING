import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import './SearchBar.scss';

class SearchContainer extends Component {
    render() {
        return (
            <div className="search-bar">
                <form action="#" onSubmit={e=> { console.log('a'); e.preventDefault();}} className="row">
                    <SearchInput />
                    <SearchButton> Search </SearchButton>
                </form>
            </div>
        );
    }
}

// SearchContainer.propTypes = {};

export default SearchContainer;
