import React, {Component} from "react";
import './TopNav.scss'
import {Link} from "react-router-dom";
import {addVideoIcon} from "../../UI/svg-constants";
import UserAvatar from "../../User/UserAvatar/UserAvatar";
import {connect} from "react-redux";
import {userMappers} from "../../../services/Redux/reducers/userReducer";
import {UserContext} from "../../Store/Store";

class TopNav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userData:  undefined,
            topNav: [
                { id: 0, svg: addVideoIcon, title: 'Add video', route: '/video/add'},
                { id: 1, title: 'About Us', route: '/About-page' },
                { id: 2, title: 'Help', route: '/Help-page' },
            ],
        }
    }

    render() {
        let userAvatar;

        if (this.context) {
            userAvatar = <UserAvatar userData={ this.context}/>;
        }

        return (
            <nav className='main-nav'>
                <ul className='row no-wrap'>
                    { this.state.topNav.map(item => {
                        return  <li key={ item.id }><Link to={ item.route } >{ item.svg ? item.svg : item.title}</Link></li>;
                    }) }
                    <li>
                        {
                            userAvatar
                        }
                    </li>
                </ul>
            </nav>
        );
    }
}

TopNav.contextType = UserContext;

export default connect(userMappers.mapStateToProps, userMappers.mapDispatchToProps) (TopNav);
