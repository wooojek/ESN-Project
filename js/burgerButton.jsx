import React from 'react';
// import Messages from './messages.jsx';
// import NewsFeed from './newsFeed.jsx';
// import Groups from './groups.jsx';
// import KnowledgeBase from './knowledgeBase.jsx';
// import Sites from './sites.jsx';
// import ToDoList from './toDoList.jsx';
// import Files from './files.jsx';
// import Sharing from './sharing.jsx';


class BurgerButton extends React.Component {

    handleBurgerClick = (event) => {
        event.preventDefault();
        let element;
        if (event.target.id === 'burgerButton') {
            element = event.target;
        } else {
            element = event.target.parentNode;
        }

        ( element.classList.contains("is-active") === true ) ? element.classList.remove("is-active") : element.classList.add("is-active");
    }

    render () {
        return <button id="burgerButton" className="c-hamburger c-hamburger--htra" onClick={event => this.handleBurgerClick(event)}> 
            {/*based on: http://callmenick.com/post/animating-css-only-hamburger-menu-icons*/}
                <span></span>
                {/*<Messages />
                <NewsFeed />
                <Groups />
                <KnowledgeBase />
                <Sites />
                <ToDoList />
                <Files />
                <Sharing />*/}
            </button>;
    }
}

export default BurgerButton;