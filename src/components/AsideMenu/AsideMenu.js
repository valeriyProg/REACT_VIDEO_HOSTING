import React, {Component} from "react";
import './AsideMenu.scss';
import {asideBarMappers} from "../../services/Redux/reducers/asideBarReducer";
import {connect} from "react-redux";
import Hamburger from "../Header/Hamburger/Hamburger";
import Logo from "../Header/Logo/Logo";
import {NavLink} from "react-router-dom";
import {windowLocationMappers} from "../../services/Redux/reducers/windowLocationReducer";


class AsideMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            channelList: undefined
        }
    }

    render() {
        const classes = ['aside-bar', 'col-1-5'];
        const styles = {
            logo: {
                alignSelf: 'center',
                width: '40px',
            }
        };
        const duration =  { transition: this.props.transitioned ? 'all ' +  this.props.transitioned + 's ': 'none' };
        return(
            <aside className={  this.props.display ? classes.concat('display').join(' ') : classes.join(' ') }  style={ duration }>
                <div className="inner">
                    <div className="aside-header bordered">
                        <div className="row">
                            <Hamburger styles={ styles.logo }/>
                            <Logo  path='/' styles={ styles.logo} />
                        </div>
                    </div>
                    <div className="aside-content">
                        <div className="content-block bordered">
                            <ul>
                                <li><NavLink to='/'>Home Page</NavLink></li>
                                <li><NavLink to='/about'>About</NavLink></li>
                                <li><NavLink to='/help'>Help</NavLink></li>
                            </ul>
                        </div>
                        <div className="content-block bordered">
                            <ul>
                                <li><a href="/">some link</a></li>
                                <li><a href="/">some link</a></li>
                                <li><a href="/">some link</a></li>
                            </ul>
                        </div>
                        <div className="content-block bordered">
                            <ul>
                                <li><a href="/">some link</a></li>
                                <li><a href="/">some link</a></li>
                                <li><a href="/">some link</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>
        );
    }
}

const mapStateToProps = state => ({
    ...asideBarMappers.mapStateToProps(state),
    ...windowLocationMappers.mapStateToProps(state)
});

const mapDispatchToProps = dispatch => ({
    ...asideBarMappers.mapDispatchToProps(dispatch),
    ...windowLocationMappers.mapDispatchToProps(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AsideMenu);
