import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './UserAvatar.scss';
import {Link} from "react-router-dom";

class UserAvatar extends Component {
    render() {
        let color;
        if (this.props.userData) {
            color = this.props.userData.avatar.avatarType === 'default' ? this.props.userData.avatar.screen : undefined;
            return (
                <Link title={this.props.userData.name} to={'channel?id=' + this.props.userData._id}  >
                    <div style={ { background: color ? color : 'auto' } } className="avatar">
                        <span>{ this.props.userData.name[0] }</span>
                    </div>
                </Link>
            );
        } else {
            return ( <div className="avatar default-preloader"/>);
        }
    }
}

UserAvatar.propTypes = {
    userData: PropTypes.object,
};

export default UserAvatar;
