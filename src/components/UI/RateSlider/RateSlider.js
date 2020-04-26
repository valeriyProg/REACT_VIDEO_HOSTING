import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './RateSlider.scss';

class RateSlider extends Component {
    render() {
        return (
            <div className="rate-slider">
                <div style={{ width: this.props.value + '%' }}
                     className={["rate-status"].concat( this.props.selected ? 'selected' : undefined).join(' ')}/>
            </div>
        );
    }
}

RateSlider.propTypes = {
    value: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired,
};

export default RateSlider;
