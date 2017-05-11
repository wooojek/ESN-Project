import React from 'react';
import { connect } from 'react-redux';

import store from '../store.jsx';
import * as actions from '../actions';

import newsData from '../data/newsFeed.js';

class NewsFeedItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            element: this.props.data,
        }
    }

    handleDropClick = (event) => {
        
        let dropMeDiv = '';
        const itemElement = this.state.element.isDropped;

        if(event.target.id !== this.state.element._id) {
            dropMeDiv = event.target.parentNode.nextSibling;
        } else {
            dropMeDiv = event.target.nextSibling;
        }

        itemElement ? dropMeDiv.classList.add('display') : dropMeDiv.classList.remove('display');

        let newElement = this.state.element;
        newElement.isDropped = !this.state.element.isDropped;

        this.setState({
            element: newElement,
        });
    }

    render() {
        return <li>
                    <div>
                        <span>{this.state.element.greeting}</span>
                        <button id={this.state.element._id} onClick={event => this.handleDropClick(event)}>{this.state.element.isDropped ? 'Zwiń' : 'Rozwiń'} <img src={this.state.element.isDropped ? './img/ic_keyboard_arrow_up_black_24px.svg' : './img/ic_keyboard_arrow_down_black_24px.svg'}/></button>
                        <div className='display'>
                            <img src={this.state.element.picture}/>
                            <span><h3>{this.state.element.name.first} {this.state.element.name.last}</h3> {this.state.element.email}</span>
                            <p>
                                {this.state.element.about}
                            </p>
                        </div>
                    </div>
                </li>;
    }
}

@connect((store) => {
    return store;
})
class NewsFeed extends React.Component {

    componentWillMount() {
        this.setState({
            news: this.props.data.news,
        });
    }

    render() {
        const news = this.state.news.map(element => {
            return <NewsFeedItem key={element._id} data={element}/>
        });

        return <div id='newsFeed'>
            <h2>NewsFeed</h2>
            <ul>
                {news}
            </ul>
        </div>;
    }
}

export default NewsFeed;