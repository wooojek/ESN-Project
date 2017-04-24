import React from 'react';
import {hashHistory} from 'react-router'

import BurgerMenu from './burgerMenu.jsx';
// import Messages from './messages.jsx';
// import NewsFeed from './newsFeed.jsx';
// import Groups from './groups.jsx';
// import KnowledgeBase from './knowledgeBase.jsx';
// import Sites from './sites.jsx';
// import ToDoList from './toDoList.jsx';
// import Files from './files.jsx';


class BurgerButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            display: false,
        }
    }

    handleBurgerClick = (event) => {
        event.preventDefault();
        hashHistory.push('/menu');
    }

    render () {
        return <div id="burger">
                <button id="burgerButton" className="c-hamburger c-hamburger--htra" onClick={event => this.handleBurgerClick(event)}> 
                {/*based on: http://callmenick.com/post/animating-css-only-hamburger-menu-icons*/}
                    <span></span>
                </button>
            </div>
    }
}

export default BurgerButton;