import React, {Component} from "react";
import CommentItem from "./CommentItem";
import './CommentList.scss';
import PropTypes from "prop-types";
import sort from "../../../services/sort";

class CommentList extends Component{
    constructor(props) {
        super(props);

        this.state = {
            comments: this.props.comments
        }
    }

    render() {
        let list = this.props.comments ?
            sort(this.props.comments, this.props.orderBy).map((item, index) => (<li key={ index }><CommentItem commentData={ item }/></li>))
            : <li className="default-preloader"/>;

        return (
            <React.Fragment>
                 <ul className="comments">
                    { list }
                </ul>
            </React.Fragment>
        );
    }
}


CommentList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
    orderBy: PropTypes.string.isRequired,
};

export default CommentList;
