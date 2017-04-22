import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
    Route,
    Link,
    IndexRoute,
    hashHistory } from 'react-router';

import Template from './template.jsx';

import Profile from './profile.jsx';
import SearchBar from './searchBar.jsx';
import BurgerButton from './burgerButton.jsx';
import Menu from './menu.jsx';
import Messages from './messages.jsx';
import NewsFeed from './newsFeed.jsx';
import Groups from './groups.jsx';
import KnowledgeBase from './knowledgeBase.jsx';
import Sites from './sites.jsx';
import ToDoList from './toDoList.jsx';
import Files from './files.jsx';
import Sharing from './sharing.jsx';
import NotFound from './notFound.jsx';

document.addEventListener('DOMContentLoaded', function () {

    class App extends React.Component {
        render() {
            return <Router history={hashHistory}>
                    <Route path='/' component={Template}>
                    <IndexRoute component={NewsFeed} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/messages' component={Messages} />
                    <Route path='/newsfeed' component={NewsFeed} />
                    <Route path='/groups' component={Groups} />
                    <Route path='/knowledgebase' component={KnowledgeBase} />
                    <Route path='/sites' component={Sites} />
                    <Route path='/todolist' component={ToDoList} />
                    <Route path='/files' component={Files} />
                    <Route path='/sharing' component={Sharing} />
                    <Route path='*' component={NotFound} />
                    </Route>
                </Router>

            {/*return <div id="container">
                    <div id="navigation">
                        <Profile />
                        <SearchBar />
                        <BurgerButton />
                    </div>
                    <div id="leftComponents">
                        <Profile />
                        <Menu />
                    </div>
                    <section id="activeContent">
                    </section>
                    <div id="rightComponents" style={{float: "right"}}>
                        <ToDoList />
                        <Files />
                        <Sharing />
                    </div>
                </div>;*/}
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );

});