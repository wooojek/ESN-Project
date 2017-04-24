import React from 'react';

import dataToDoList from './data/toDoList.js';

let data = dataToDoList.toDo;

class ToDoItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            done: './img/ic_done_black_24px.svg',
            toComplete: './img/ic_clear_black_24px.svg',
        };
    }

    handleRemoveClick = () => {
        if(typeof this.props.onRemove === 'function') {
            this.props.onRemove(this.props.itemKey);
        }
    }

    handleDoneClick = () => {
        if(typeof this.props.onUpdate === 'function') {
            const newState = !this.props.itemState;
            this.props.onUpdate(this.props.itemTitle, newState, this.props.itemKey);
        }
    }    

    render() {
        const taskState = this.props.itemState ? this.state.done : this.state.toComplete;
        const buttonUpdate = this.props.itemState ? (<button onClick={this.handleDoneClick} disabled>Zakończ</button>) : (<button onClick={this.handleDoneClick}>Zakończ</button>);
        return <li key={this.props.itemKey}>
            <img src={taskState}/>
            <span>{this.props.itemTitle}</span>
            <button onClick={this.handleRemoveClick}>Usuń</button>
            {/*<button onClick={this.handleDoneClick}>Zakończ</button>*/}
            {buttonUpdate}
        </li>;
    }
}

class ToDoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: data,
            newItem: '',
        };
    }

    handleItemOnAdd = () => {
        const arrayItems = this.state.items.slice();
        const itemToAdd = this.nameInput.value; 
        const newId = Math.floor((Math.random()*1000)+1);
        const item = {
            _id: newId,
            state: false,
            name: itemToAdd,
        }

        arrayItems.push(item);

        this.setState({
            items: arrayItems,
            newItem: '',
        });
    }

    handleItemOnRemove = (itemToRemove) => {
        const newItems = this.state.items.filter(element => {
            return element._id !== itemToRemove;
        });

        this.setState({
            items: newItems,
        });
    }

    handleItemRemoveAll = () => {
        const newItems = this.state.items.filter(element => {
            return element.state !== true;
        });

        this.setState({
            items: newItems,
        });
    }

    handleUpdateItem = (itemToUpdate, newState, itemKey) => {
        const updateItems = this.state.items.filter(element => {
            return element._id !== itemKey;
        });
        const item = {
            _id: itemKey,
            state: newState,
            name: itemToUpdate,
        }

        updateItems.push(item);

        this.setState({
            items: updateItems,
        });
    }

    handleNewItemChange = (event) => {
        this.setState({
            newItem: event.target.value,
        });
    }


    render() {
        const toDoItems = this.state.items.map(element => {
            return <ToDoItem key={element._id} itemKey={element._id} itemTitle={element.name} itemState={element.state} onRemove={this.handleItemOnRemove} onUpdate={this.handleUpdateItem}/>;
        });
        return <div id='toDoList'>
            <h2>ToDoList</h2>
            <ul>
                {toDoItems}
            </ul>
                <input type="text" ref={input => this.nameInput = input} value={this.state.newItem} onChange={this.handleNewItemChange} placeholder="Dodaj zadanie..."/>
                <button onClick={this.handleItemOnAdd}><img src='./img/ic_playlist_add_black_24px.svg'/></button>
                <button onClick={this.handleItemRemoveAll}>Usuń zakończone</button>
        </div>;
    }
}

export default ToDoList;