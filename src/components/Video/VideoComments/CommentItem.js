import React, {Component} from "react";
import PropTypes from "prop-types";
import http, {fetchData} from "../../../services/httpService";
import DefaultButton from "../../UI/DefaultButton/DefaultButton";
import RateButton from "../../UI/RateButton/RateButton";
import UserAvatar from "../../User/UserAvatar/UserAvatar";
import UserName from "../../User/UserName/UserName";

const url = 'http://localhost:3100/';

 class CommentItem extends Component{
     constructor(props) {
         super(props);

         this._isMounted = false;

         this.state = {
             data: undefined
         }
     }

     componentDidMount() {
         this._isMounted = true;

         http.get(url + 'channel/user?_id=' +  this.props.commentData.userId)
             .then(response => response.json())
             .then(data => {
                 if (this._isMounted) {
                     this.setState({
                         data
                     });
                 }
             });
     }

     componentWillUnmount() {
         this._isMounted = false;
     }

     render() {
         let commentItem;
         if (this.state.data) {
             commentItem =  <div className="comment row">
                 <div className="column">
                     <UserAvatar userId={this.state.data._id} userData={this.state.data} />
                 </div>
                 <div className="column">
                     <UserName userData={this.state.data}/>
                     <p>{ this.props.commentData.comment }</p>
                     <div className="row row-v-centered comment-rate">
                         <RateButton initialRateType={ 1 } selected={ false } onClick={e=> console.log('dada')}/>
                         <RateButton initialRateType={ 0 } selected={ false } onClick={e=> console.log('dada')}/>
                         <DefaultButton onClick={e=>console.log('aa')}>Reply</DefaultButton>
                     </div>
                 </div>
             </div>
         }
         return (
             commentItem ? commentItem : <span className="comment-item default-preloader"/>
         )
     }
}

CommentItem.propTypes = {
    commentData: PropTypes.object.isRequired,
};


export default CommentItem;
