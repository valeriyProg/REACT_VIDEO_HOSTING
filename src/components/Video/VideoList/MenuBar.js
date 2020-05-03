import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MenuBar extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            isShow: this.props.initViewState
        }
    }

    render() {
        return (
            <div style={{ display: 'none' }}>
                s
            </div>
        );
    }
}

MenuBar.propTypes = {
    initViewState: PropTypes.bool.isRequired,
};

export default MenuBar;
