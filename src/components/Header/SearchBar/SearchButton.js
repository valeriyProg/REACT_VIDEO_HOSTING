import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import './SearchBar.scss';

class SearchButton extends Component {
    render() {
        return (
            <button type="submit"> {this.props.children} </button>
        );
    }
}

// SearchButton.propTypes = {};

export default SearchButton;
