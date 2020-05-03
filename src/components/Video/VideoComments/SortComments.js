import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SortButton from "../../UI/SortButton/SortButton";
import {orderBy} from "../../../services/sort";
import './SortComments.scss';

class SortComments extends Component {
    constructor(props) {
        super(props);

        this._isOnList = false;

        this.state = {
            isOpen: false,
            selected: orderBy.ASC
        }
    }

    componentDidMount() {
        window.addEventListener('click', this.hideList );
    }

    componentWillUnmount() {
        window.removeEventListener('click',  this.hideList);
    }

    hideList = (e) => {
      if (!this._isOnList && this.state.isOpen) {
          this.setState({
              isOpen: false
          });
      }
    };

    toggleList = (e) => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    selectHandler = (value) => {
        if (this.state.selected === value) {
            return;
        }
        this.setState({
            selected: value
        });
        this.props.sortHandler(value);
    };

    render() {
        let list = <div className="sort-list" >
            <div className="inner">
                <ul>
                    <li>
                        <a href="#" className={ this.state.selected === orderBy.DESC ? 'selected' : undefined }
                           onClick={ event => { event.preventDefault(); this.selectHandler(orderBy.DESC); }} >New First</a>
                    </li>
                    <li>
                        <a href="#" className={ this.state.selected === orderBy.rate ? 'selected' : undefined }
                           onClick={ event => { event.preventDefault(); this.selectHandler(orderBy.rate);}} >Popular First</a>
                    </li>
                </ul>
            </div>
        </div>;

        return (
            <div className="sort" onMouseEnter={ event => this._isOnList = true } onMouseLeave={ event => this._isOnList = false }>
                <SortButton onClick={ this.toggleList }/>
                { this.state.isOpen && list }
            </div>
        );
    }
}

SortComments.propTypes = {
    sortHandler: PropTypes.func.isRequired,
};

export default SortComments;
