import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";

class MenuLink extends Component {
    checkActive = (match, location) => {
        if(!location) return false;
        const {pathname} = location;
        return pathname === this.props.path;
    };

    render() {
        let classes = ['row', 'aside-link-inner', 'row-v-centered'];

        return (
            <NavLink to={this.props.path} isActive={ this.checkActive }>
                <div className={classes.join(' ')}> { this.props.children } </div>
            </NavLink>
        );
    }
}

MenuLink.propTypes = {
    path: PropTypes.string.isRequired,
};

export default MenuLink;
