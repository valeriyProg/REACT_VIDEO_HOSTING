import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CommentFormButton from "../../UI/CommentButtons/CommentFormButton";
import './AddCommentForm.scss';

class AddCommentForm extends Component {
    render() {
        return (
            <div className="add-comment">
                <div className="row flex-end">
                    <CommentFormButton onClick={ e => { console.log('a')}}
                                       active={false}
                                       type={ 'reject' } >Cancel</CommentFormButton>
                    <CommentFormButton onClick={ e => { console.log('a')}}
                                       active={false}
                                       type={ 'submit' } >Add Comment</CommentFormButton>
                </div>
            </div>
        );
    }
}

AddCommentForm.propTypes = {};

export default AddCommentForm;
