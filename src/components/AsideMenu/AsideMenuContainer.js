import React, {Component} from "react";
import './AsideMenu.scss';
import {asideBarMappers} from "../../services/Redux/reducers/asideBarReducer";
import {connect} from "react-redux";
import {windowLocationMappers} from "../../services/Redux/reducers/windowLocationReducer";
import AsideMenu from "./AsideMenu";


class AsideMenuContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            channelList: undefined,
        }
    }

    render() {
        const classes = ['aside-bar', 'col-1-6'];
        const duration =  { transition: this.props.transitioned ? 'all ' +  this.props.transitioned + 's ': 'none' };
        return(
            <aside className={  this.props.display ? classes.concat('display').join(' ') : classes.join(' ') }
                   onMouseEnter={ e => this._mouseOnMenu = true} onMouseLeave={ e => this._mouseOnMenu = false }
                   style={ duration }>
                <div className="inner">
                    <AsideMenu />
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

export default connect(mapStateToProps, mapDispatchToProps)(AsideMenuContainer);
