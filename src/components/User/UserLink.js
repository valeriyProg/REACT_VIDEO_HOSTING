import React, {Component} from "react";
import './UserLink.scss';
import PropTypes from "prop-types";
import numberFormatter from "../../services/numberFormatter";

const url = 'http://localhost:3100/';

class UserLink extends Component {
    constructor(props) {
        super(props);

        this.state ={
            userId: this.props.initialUserId,
            data: undefined
        };
    }

    componentDidMount() {
        fetch(url + 'channel/' + this.state.userId)
            .then(response => response.json())
            .then(data=> {
                this.setState({
                    ...this.state,
                   data
                });
            });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.data && this.props.initialUserId !== prevProps.initialUserId  ) {
            fetch(url + 'channel/' + this.props.initialUserId)
                .then(response => response.json())
                .then(data=> {
                    this.setState({
                        userId: this.props.initialUserId,
                        data
                    });
                });
        }
    }

    render() {
        let channelLogo, channelName, countDescriptions;
        if (this.state.data) {
            channelLogo =  <a href={"/user/" + this.state.data.id} className="avatar" title={ this.state.data.description.name }>
                <span>{ this.state.data.description.name[0] }</span></a>;
            channelName = <a href={"/user/" + this.state.data.id} className="user-name" title={ this.state.data.description.name }>
                { this.state.data.description.name }</a>;
            countDescriptions = this.state.data.description.countDescriptions > 0 ? <span>{ numberFormatter(this.state.data.description.countDescriptions) }&nbsp; subscriptions</span> : undefined;
        }

        return (
            <div className="comment row">
                <div className="column">
                    {  channelLogo || 'loading..' }
                </div>
                <div className="column">
                    {  channelName ||  'loading...' }
                    { countDescriptions || undefined}
                </div>
            </div>
        )
    }
}

UserLink.propTypes = {
    initialUserId: PropTypes.number.isRequired,
};

export default UserLink;
