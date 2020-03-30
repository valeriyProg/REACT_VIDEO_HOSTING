import React, {Component} from "react";
import PropTypes from 'prop-types';
import './RateButton.scss';
import {dislikeIcon, likeIcon} from "../svg-constants";


class RateButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: this.props.initialRateType,
            icon: this.props.initialRateType ? likeIcon : dislikeIcon
        }
    }

    render() {
        let classes = ['rate-btn'];
        return (
            <button className={ classes.concat(this.props.selected ? 'selected' : undefined).join(' ')}
                    onClick={ () => this.props.onClick() }>
                { this.state.icon }
            </button>
        );
    }
}

RateButton.propTypes = {
    initialRateType: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired,
};

export default RateButton;
