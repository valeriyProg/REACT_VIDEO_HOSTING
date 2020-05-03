import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './SortButton.scss';
import {sortIcon} from "../svg-constants";

class SortButton extends Component {
    render() {
        return (
            <button className='sort-btn' onClick={ this.props.onClick }>
                <div className="row space-between row-v-centered">
                    {sortIcon} Order By
                </div>
            </button>
        );
    }
}

SortButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default SortButton;
