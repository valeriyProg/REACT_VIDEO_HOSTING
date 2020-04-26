import React, {Component} from "react";
import './UserLink.scss';
import PropTypes from "prop-types";
import numberFormatter from "../../services/numberFormatter";
import UserAvatar from "./UserAvatar/UserAvatar";
import UserName from "./UserName/UserName";

const url = 'http://localhost:3100/';

class UserLink extends Component {
    constructor(props) {
        super(props);

        this._isMounded = false;
        this.state ={
            userId: this.props.initialUserId,
            data: undefined
        };
    }

    componentDidMount() {
        this._isMounded = true;

        fetch(url + 'channel/user?_id=' + this.state.userId)
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
            fetch(url + 'channel/user?_id=' + this.props.initialUserId)
                .then(response => response.json())
                .then(data=> {
                    this.setState({
                        userId: this.props.initialUserId,
                        data
                    });
                });
        }
    }

    componentWillUnmount() {
        this._isMounded = false;
    }

    render() {
        let countDescriptions;
        if (this.state.data && this.state.data.subscriptionChannelsId.length >= 0 ) {
            countDescriptions = <span>{ numberFormatter(this.state.data.subscriptionChannelsId.length) }&nbsp; subscriptions</span>;
        }

        return (
            <div className="comment row">
                <div className="column">
                    <UserAvatar userData={this.state.data} />
                </div>
                <div className="column">
                     <UserName  userData={this.state.data}/>
                    { countDescriptions || <div className="default-preloader"/>}
                </div>
            </div>
        )
    }
}

UserLink.propTypes = {
    initialUserId: PropTypes.string,
};

export default UserLink;


