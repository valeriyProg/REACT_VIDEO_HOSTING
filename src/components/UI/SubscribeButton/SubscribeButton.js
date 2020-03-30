import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './SubscribeButton.scss';

class SubscribeButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSubscribed: this.props.isSubscribe
        }
    }

    subscribeToggle = (e) => {
        this.props.onClick(e);
        this.setState({
            isSubscribed: !this.state.isSubscribed
        });
    };

    render() {
        let classes = ['btn', 'big-btn', 'subscribe-btn'].concat(this.state.isSubscribed ? 'subscribed' : 'btn-red').join(' ');
        return (
            <button className={classes} onClick={ this.subscribeToggle }>
                { this.state.isSubscribed ? 'You Subscribed' : 'Subscribe' }
            </button>
        );
    }
}

SubscribeButton.propTypes = {
    isSubscribe: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

export default SubscribeButton;

