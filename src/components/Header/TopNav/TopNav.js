import React, {Component} from "react";
import './TopNav.scss'
import {Link} from "react-router-dom";
import {addVideoIcon} from "../../UI/svg-constants";

class TopNav extends Component {

    constructor(props) {
        super(props);

        this.state = {
            topNav: [
                { id: 0, svg: addVideoIcon, title: 'Add video', route: '/video/add'},
                { id: 1, title: 'About Us', route: '/About-page' },
                { id: 2, title: 'Help', route: '/Help-page' },
            ],
        }
    }

    render() {
        return (
            <nav className='main-nav'>
                <ul className='row no-wrap'>
                    { this.state.topNav.map(item => {
                        return  <li key={ item.id }><Link to={ item.route } >{ item.svg ? item.svg : item.title}</Link></li>;
                    }) }
                </ul>
            </nav>
        );
    }
}

export default TopNav;
