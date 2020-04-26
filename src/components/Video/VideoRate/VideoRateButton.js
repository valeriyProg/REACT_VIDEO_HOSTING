import React, {Component} from 'react';
import PropTypes from 'prop-types';
import RateButton from "../../UI/RateButton/RateButton";
import numberFormatter from "../../../services/numberFormatter";

class VideoRateButton extends Component{
    render() {
        return(
            <div className="rating row space-between">
                <div className="col">
                    <div className="row">
                        <RateButton initialRateType={ this.props.initialRateType } selected={ this.props.selected } onClick={this.props.onClick}/>
                        <a href="/" onClick={e => { e.preventDefault(); this.props.onClick(); }}>
                            <span className={ this.props.selected ? 'selected' : undefined}>
                                {numberFormatter(this.props.initialRateType === 1 ? this.props.data.likeCount: this.props.data.dislikeCount)}
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

VideoRateButton.propTypes = {
    initialRateType: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

export default VideoRateButton;
