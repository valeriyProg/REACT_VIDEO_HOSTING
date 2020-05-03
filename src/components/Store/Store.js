import React, {Component} from 'react';
import PropTypes from 'prop-types';

export const UserContext = React.createContext({});

class Store extends Component {
    render() {
        return (
            <UserContext.Provider value={this.props.userInfo}>
                {this.props.children }
            </UserContext.Provider>
        );
    }
}

Store.propTypes = {
    userInfo: PropTypes.object,
};

export default Store;
