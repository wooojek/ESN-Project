import React from 'react';
import BurgerMenu from './burgerMenu.jsx';
// import Messages from './messages.jsx';
// import NewsFeed from './newsFeed.jsx';
// import Groups from './groups.jsx';
// import KnowledgeBase from './knowledgeBase.jsx';
// import Sites from './sites.jsx';
// import ToDoList from './toDoList.jsx';
// import Files from './files.jsx';
// import Sharing from './sharing.jsx';


class BurgerButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            display: false,
        }
    }

    handleBurgerClick = (event) => {
        event.preventDefault();
        let element;

        if (event.target.id === 'burgerButton') {
            element = event.target;
        } else {
            element = event.target.parentNode;
        }

        ( element.classList.contains("is-active") === true ) ? element.classList.remove("is-active") : element.classList.add("is-active");

        this.setState({
            display: !this.state.display,
        })
    }

    render () {
        return <div id="burger">
                <button id="burgerButton" className="c-hamburger c-hamburger--htra" onClick={event => this.handleBurgerClick(event)}> 
                {/*based on: http://callmenick.com/post/animating-css-only-hamburger-menu-icons*/}
                    <span></span>
                </button>
                {this.state.display ? <BurgerMenu /> : null}
            </div>
    }
}

export default BurgerButton;