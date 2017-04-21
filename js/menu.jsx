import React from 'react';
import Messages from './messages.jsx';
import NewsFeed from './newsFeed.jsx';
import Groups from './groups.jsx';
import KnowledgeBase from './knowledgeBase.jsx';
import Sites from './sites.jsx';
import ToDoList from './toDoList.jsx';
import Files from './files.jsx';
import Sharing from './sharing.jsx';

class Menu extends React.Component {
    render () {
    return <div id="burgerMenu">
            <ul>
                <li><Messages /></li>
                <li><NewsFeed /></li>
                <li><Groups /></li>
                <li><KnowledgeBase /></li>
                <li><Sites /></li>
                <li><ToDoList /></li>
                <li><Files /></li>
                <li><Sharing /></li>
            </ul>
        </div>
    }
}

export default Menu;