import React, {Component} from "react";
import './CommentList.scss';
import PropTypes from "prop-types";
import numberFormatter from "../../../services/numberFormatter";
import CommentList from "./CommentList";
import http, {fetchData} from "../../../services/httpService";
import CommentFormContainer from "./CommentFormContainer";
import {orderBy} from "../../../services/sort";
import SortComments from "./SortComments";

const url = 'http://localhost:3100/';

class CommentsContainer extends Component{
    constructor(prop) {
        super(prop);

        this._isMounted = false;

        this.state = {
            data: undefined,
            tryFetch: undefined,
            orderBy: orderBy.ASC
        }
    }

    componentDidMount() {
        this._isMounted = true;
        http.get(url + 'comments/' + this.props.commentsId)
            .then(response => response.json())
            .then(data => {
                if (this._isMounted) {
                    this.setState({
                        data,
                        tryFetch: false
                    });
                }
            });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if ( (prevState.data && this.props.commentsId !== prevState.data._id) ||  this.state.tryFetch === true) {
            http.get(url + 'comments/' + this.props.commentsId)
                .then(response => response.json())
                .then(data => {
                    if (this._isMounted) {
                        this.setState({
                            data,
                            tryFetch: false
                        });
                    }
                });
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    submitHandler = (params) => {
        http.post(url + 'comments/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                comment_id:  this.state.data._id,
                ...params
            })})
            .then( value => {
                 this.setState({
                     tryFetch: true
                 });
            });
    };

    sortHandler = (value) => {
        this.setState({
            orderBy: value
        })
    };

    render() {
        let  component;
        if (this.state.data) {
            component = <div className="comment-container">
                <div className="inner">
                    <div className="row comment-info">
                         {/* COMMENTS COUNT */}
                        <span style={{ marginRight: '50px'}}>
                            {numberFormatter(this.state.data.comments.length > 0 ? this.state.data.comments.length  : 0)} comments
                        </span>
                        <SortComments sortHandler={this.sortHandler}/>
                    </div>
                    <div className="comment-content">
                        {/*ADD COMMENT FORM */}
                        <CommentFormContainer key={this.props.commentsId} userId={this.props.userId} onSubmit = {this.submitHandler} />
                        {/* COMMENT LIST */}
                        <CommentList orderBy={ this.state.orderBy }  comments={this.state.data.comments}/>
                    </div>
                </div>
            </div>
        }

        return ( component ?  component: <span>Loading</span>);
    }
}

CommentsContainer.propTypes = {
    commentsId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired
};

export default CommentsContainer;
