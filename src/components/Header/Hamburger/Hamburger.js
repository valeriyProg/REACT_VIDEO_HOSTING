import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {asideBarMappers} from "../../../services/Redux/reducers/asideBarReducer";
import {windowLocationMappers} from "../../../services/Redux/reducers/windowLocationReducer";

class Hamburger extends Component {
    constructor(props) {
        super(props);

        this._bodyRef = document.querySelector('body');
        this.state = {
            initialLocation: window.location,
        }
    }

    render() {
        let duration =  this.state.initialLocation.pathname !== '/watch' ?  false : 0.5;
        return (
            <button  style={ this.props.styles ? this.props.styles: undefined } onClick={ () => {
                if (this.props.display) {
                    this.props.hideSideBar(duration);
                    this._bodyRef.style.overflow = duration ? 'auto': 'auto';
                } else {
                    this.props.showAsideBar(duration);
                    this._bodyRef.style.overflow = duration ? 'hidden': 'auto';
                }
            }}>
                <i className="fa fa-bars" aria-hidden="true" style={{fontSize: '20px'}}/>
            </button>
        );
    }
}

Hamburger.propTypes = {
    styles: PropTypes.object,
};

const mapStateToProps = state => ({
    ...windowLocationMappers.mapStateToProps(state),
    ...asideBarMappers.mapStateToProps(state)
});

const mapDispatchToProps = dispatch =>({
    ...windowLocationMappers.mapDispatchToProps(dispatch),
    ...asideBarMappers.mapDispatchToProps(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);
