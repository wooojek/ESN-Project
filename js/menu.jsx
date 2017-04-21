import React from 'react';
import Messages from './messages.jsx';
import NewsFeed from './newsFeed.jsx';
import Groups from './groups.jsx';
import KnowledgeBase from './knowledgeBase.jsx';
import Sites from './sites.jsx';

class Menu extends React.Component {
    render () {
    return <div id="menu">
            <Messages />
            <NewsFeed />
            <Groups />
            <KnowledgeBase />
            <Sites />
        </div>
    }
}

export default Menu;