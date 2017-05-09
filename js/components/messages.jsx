import React from 'react';

import messagesData from '../data/messages.js';

class MessagesItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.props.elementData,
        }
    }

    handleOnClick = (event) => {
        
        let dropMeDiv = '';
        const itemElement = this.state.data.isOpen;

        if(event.target.id !== this.state.data._id2) {
            dropMeDiv = event.target.parentNode.nextSibling;
        } else {
            dropMeDiv = event.target.nextSibling;
        }

        itemElement ? dropMeDiv.classList.add('display') : dropMeDiv.classList.remove('display');

        let newElement = this.state.data;
        newElement.isOpen = !this.state.data.isOpen;

        this.setState({
            data: newElement,
        });
    }

    render() {
        return <li key={this.state.data._id}>
                <button id={this.state.data._id2} onClick={e => this.handleOnClick(e)}>
                    <h3><img src={this.state.data.picture} />{this.state.data.name2.first} {this.state.data.name2.last}</h3>
                </button>
                <div className="display">
                    <p>Hello {this.state.data.name.first}! {this.state.data.about}</p>
                    <p>Wysłano: {this.state.data.registered}</p>
                </div>
            </li>
    }
}

class Messages extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        this.setState({
            data: messagesData.data,
        });
    }

    render() {
        const messages = this.state.data.map(element => {
            return <MessagesItem key={element._id} elementData={element} />;
        });

        return <div id='messages'>
            <h2>Messages</h2>
            <ul>
                {messages}
            </ul>
        </div>;
    }
}

export default Messages;