import React, {Component} from "react";
import {Link} from "react-router-dom";
import {logo} from "../../UI/svg-constants";
import PropTypes from "prop-types";

class Logo extends Component {

    render() {
        return (
            <Link to={ this.props.path } style={ this.props.styles ? this.props.styles: undefined }>
                { logo }
            </Link>
        );
    }
}

Logo.propTypes = {
    path: PropTypes.string.isRequired,
    styles: PropTypes.object,
};

export default Logo;
