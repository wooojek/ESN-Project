import React from 'react';

class BurgerButton extends React.Component {

    render () {
        return <div id="burgerButton">
                <Messages />
                <NewsFeed />
                <Groups />
                <KnowledgeBase />
                <Sites />
                <ToDoList />
                <Files />
                <Sharing />
            </div>;
    }
}

export default BurgerButton;