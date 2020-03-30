import React, {Component} from "react";
import './CommentList.scss';
import PropTypes from "prop-types";
import numberFormatter from "../../../services/numberFormatter";
import CommentList from "./CommentList";
import {fetchData} from "../../../services/httpService";

const url = 'http://localhost:3100/';

class CommentsContainer extends Component{
    constructor(prop) {
        super(prop);

        this.state = {
            data: undefined
        }
    }

    componentDidMount() {
       fetchData(url + 'comments/' + this.props.commentsId, null, this);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.state.data === undefined) {
            return true;
        }
        return this.state.data.id !== nextProps.commentsId;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.data && this.props.commentsId !== prevState.data.id ) {
            fetchData(url + 'comments/' + this.props.commentsId, null, this);
        }
    }

    render() {
        let  component;
        if (this.state.data) {
            component = <div className="comment-container">
                <div className="inner">
                    <div className="comment-info">
                         {/* COMMENTS COUNT */}
                        <span>{numberFormatter(this.state.data.comments.length )} comments</span>
                    </div>
                    <div className="comment-content">
                        {/* COMMENT LIST */}
                        <CommentList comments={this.state.data.comments} onClick={ () => {
                            fetchData(url + 'comments/' + this.props.commentsId, null, this);
                        } }/>
                    </div>
                </div>
            </div>
        }

        return ( component ?  component: <span>Loading</span>);
    }
}

CommentsContainer.propTypes = {
    commentsId: PropTypes.number.isRequired,
};

export default CommentsContainer;
