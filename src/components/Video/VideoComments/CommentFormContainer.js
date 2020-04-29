import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import CommentFormButton from "../../UI/CommentButtons/CommentFormButton";
import './CommentForm.scss';
import UserAvatar from "../../User/UserAvatar/UserAvatar";
import {UserContext} from "../../Store/Store";

class CommentFormContainer extends Component {
    constructor(props) {
        super(props);

        this.addCommentRef = createRef();

        this.state = {
            onBlur: false,
            inputComment: undefined
        }
    }

    submitHandler = (e) => {
        e.preventDefault();

        this.props.onSubmit({
           text: this.state.inputComment.replace( /&nbsp;/g, ' '),
           userId: this.context._id
        });

        this.clearInputComment();
    };

    resetHandler = (e) => {
        e.preventDefault();

        this.clearInputComment();
    };

    inputHandler = (e) => {
        this.setState({
            inputComment: this.addCommentRef.current.innerHTML
        })
    };

    toggleFocus =  () => {
        if (this.state.onBlur) {
            return;
        }
        this.setState({
           onBlur: true
        });
    };

    clearInputComment = () => {
        this.addCommentRef.current.innerHTML  = '';

        this.setState({
            inputComment: undefined
        });
    };

    render() {
        let commentEditClasses = ["add-comment-container"].concat(!this.state.inputComment ? 'placeholder': undefined).join(' ');
        let commentEditStyles = this.state.onBlur ? {borderBottom: '3px solid rgba(0,0,0, 0.5)'} : undefined;

        return (
            <div className="add-comment">
                <div className="row space-between">
                    <div className="column user-col">
                        <UserAvatar userData={ this.context}/>
                    </div>
                    <div className="column col-1">
                        <form  onSubmit={this.submitHandler} onReset={ this.resetHandler }>
                            <div className={commentEditClasses} style= { commentEditStyles } onInput={ this.inputHandler}
                                 onFocus={ this.toggleFocus} contentEditable={true} ref={this.addCommentRef}/>
                            <div className="row flex-end" style={ !this.state.onBlur ? {display: 'none'}: undefined}>
                                <CommentFormButton active={!!this.state.inputComment} type={ 'reset' } >Cancel</CommentFormButton>
                                <CommentFormButton active={!!this.state.inputComment} type={ 'submit' } >Add Comment</CommentFormButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

CommentFormContainer.contextType = UserContext;

CommentFormContainer.propTypes = {
    userId: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default CommentFormContainer;
