import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {UserContext} from "../../components/Store/Store";

const url = 'http://localhost:3100/';

class AddVideoPage extends Component {
    render() {
        if (this.context) {
            return (
                <div>
                    <form action={ url + "video"  } method="post" encType="multipart/form-data">
                        <label>Файл</label>
                        <input type="file" name="video"/>
                        <input type="file" name="screen"/>
                        <input type="file" name="preloader"/>
                        <input type="text" name="userId" value={ this.context._id }/>
                        <input type="submit" value="Send" />
                    </form>
                    <video src={url + "video/c848d4092c893db3fd8bff4774677c27"}  preload="none"
                           poster={url + "video/47202e4105a0d5373cb6d4fb3e0c8e9e"}
                           controls/>
                </div>
            );
        }
        return <span>Loading</span>
    }
}

AddVideoPage.contextType = UserContext;
// AddVideoPage.propTypes = {};

export default AddVideoPage;
