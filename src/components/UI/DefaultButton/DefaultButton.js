import React, {Component} from 'react';
import PropTypes from 'prop-types';

class DefaultButton extends Component {
    render() {
        return (
            <button className="btn big-btn" onClick={ this.props.onClick }>{ this.props.children }</button>
        );
    }
}

DefaultButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default DefaultButton;
