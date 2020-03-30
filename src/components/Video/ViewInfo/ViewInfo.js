import React, {Component} from 'react';
import numberFormatter from "../../../services/numberFormatter";
import {months} from "../../../services/years";
import PropTypes from 'prop-types';

 class Views extends Component {

    render() {
        let date = new Date(this.props.data.date);
        let day = date.getDate();
        let month = months[date.getMonth()];
        let year = date.getFullYear();

        return(
            <span>{ numberFormatter(this.props.data.watch) }&nbsp;views&nbsp;&#8226;&nbsp;{ day } { month } { year } y.</span>
        );
    }
}

Views.propTypes = {
     data: PropTypes.object.isRequired
};

export default Views;

