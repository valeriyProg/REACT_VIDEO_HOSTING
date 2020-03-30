import React, {Component} from "react";
import PropTypes from "prop-types";
import {fetchData} from "../../../services/httpService";
import DefaultButton from "../../UI/DefaultButton/DefaultButton";
import RateButton from "../../UI/RateButton/RateButton";

const url = 'http://localhost:3100/';

 class CommentItem extends Component{
     constructor(props) {
         super(props);

         this.state = {
             data: undefined
         }
     }

     componentDidMount() {
         fetchData(url + 'channel/' + this.props.commentData.user.userId, null, this);
         // fetch(url + 'channel/' + this.props.commentData.user.userId)
         //     .then(response => response.text())
         //     .then(text => text ? JSON.parse(text) : {})
         //     .then(user => {
         //         this.setState({
         //             user
         //         });
         //     });
     }

     render() {
         let commentItem;
         if (this.state.data) {
             commentItem =  <div className="comment row">
                 <div className="column">
                     <a href={"/user/" + this.state.data.description.name} className="avatar" title={ this.state.data.description.name }>
                         <span>{ this.state.data.description.name[0] }</span>
                     </a>
                 </div>
                 <div className="column">
                     <a href={"/user/" + this.state.data.id} className="user-name" title={ this.state.data.description.name }>{ this.state.data.description.name }</a>
                     <p>{ this.props.commentData.text }</p>
                     <div className="row row-v-centered comment-rate">
                         <RateButton initialRateType={ 1 } selected={ false } onClick={e=> console.log('dada')}/>
                         <RateButton initialRateType={ 0 } selected={ false } onClick={e=> console.log('dada')}/>
                         <DefaultButton onClick={e=>console.log('aa')}>Reply</DefaultButton>
                     </div>
                 </div>
             </div>
         }
         return (
             commentItem ? commentItem : <span>Loading</span>
         )
     }
}

CommentItem.propTypes = {
    commentData: PropTypes.object.isRequired,
};


export default CommentItem;
