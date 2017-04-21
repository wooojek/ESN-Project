import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './profile.jsx';
import SearchBar from './searchBar.jsx';
import BurgerButton from './burgerButton.jsx';
// import Messages from './messages.jsx';
// import NewsFeed from './newsFeed.jsx';
// import Groups from './groups.jsx';
// import KnowledgeBase from './knowledgeBase.jsx';
// import Sites from './sites.jsx';
// import ToDoList from './toDoList.jsx';
// import Files from './files.jsx';
// import Sharing from './sharing.jsx';

document.addEventListener('DOMContentLoaded', function () {

    class App extends React.Component {
        render() {
            return <div id="container">
                    <div id="navigation">
                        <Profile />
                        <SearchBar />
                        <BurgerButton />
                    </div>
                    <section id="activeContent">
                    </section>
                </div>;
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );

});