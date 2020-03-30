import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './CommentFormButton.scss';

class CommentFormButton extends Component {
    render() {
        let classes = ['big-btn'].concat(this.props.type === 'submit' ? 'submit-btn' : 'reject-btn');

        return (
            <button disabled={ !this.props.active } type={ this.props.type }
                    onClick={ e => this.props.onClick() }
                    className={ this.props.active ? classes.concat('active').join(' ') : classes.join(' ')}>
                { this.props.children }
            </button>
        );
    }
}

CommentFormButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    active: PropTypes.bool
};

export default CommentFormButton;
