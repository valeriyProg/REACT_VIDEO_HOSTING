import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './UserName.scss';
import {Link} from "react-router-dom";

class UserName extends Component {
    render() {
        if (!this.props.userData) {
            return (<div className="default-preloader"/>);
        }
        return (
            <Link title={this.props.userData.name} to={'channel?id=' + this.props.userData._id}  >
                <span className="user-name">{ this.props.userData.name }</span>
            </Link>
        );
    }
}

UserName.propTypes = {
    userData: PropTypes.object,
};

export default UserName;
