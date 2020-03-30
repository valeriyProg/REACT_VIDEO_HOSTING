import React, {Component} from "react";
import CommentItem from "./CommentItem";
import './CommentList.scss';
import PropTypes from "prop-types";
import CommentFormButton from "../../UI/CommentButtons/CommentFormButton";
import AddCommentForm from "./AddCommentForm";

class CommentList extends Component{
    constructor(props) {
        super(props);

        this.state = {
            comments: this.props.comments
        }
    }

    render() {
        let list = this.props.comments ? this.props.comments.map((item, index) => (<li key={ index }><CommentItem commentData={ item }/></li>)) : <li>Loading</li> ;

        return (
            <React.Fragment>
                <AddCommentForm />
                 <ul className="comments">
                    { list }
                </ul>
            </React.Fragment>
        );
    }
}


CommentList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClick: PropTypes.func.isRequired
};

export default CommentList;
