import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
    Route,
    Link,
    IndexRoute,
    hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import store from './store.jsx';

// require('../sass/style.scss');

import Template from './components/template.jsx';

import Profile from './components/profile.jsx';
import SearchBar from './components/searchBar.jsx';
import BurgerButton from './components/burgerButton.jsx';
import BurgerMenu from './components/burgerMenu.jsx';
import Menu from './components/menu.jsx';
import Messages from './components/messages.jsx';
import NewsFeed from './components/newsFeed.jsx';
import Groups from './components/groups.jsx';
import KnowledgeBase from './components/knowledgeBase.jsx';
import Sites from './components/sites.jsx';
import ToDoList from './components/toDoList.jsx';
import Files from './components/files.jsx';
import NotFound from './components/notFound.jsx';

document.addEventListener('DOMContentLoaded', function () {

    class App extends React.Component {
        render() {
            return <Router history={hashHistory}>
                        <Route path='/' component={Template}>
                        <IndexRoute component={NewsFeed} />
                        <Route path='/profile' component={Profile} />
                        <Route path='/menu' component={BurgerMenu} />
                        <Route path='/messages' component={Messages} />
                        <Route path='/newsfeed' component={NewsFeed} />
                        <Route path='/groups' component={Groups} />
                        <Route path='/knowledgebase' component={KnowledgeBase} />
                        <Route path='/sites' component={Sites} />
                        <Route path='/todolist' component={ToDoList} />
                        <Route path='/files' component={Files} />
                        <Route path='*' component={NotFound} />
                        </Route>
                    </Router>
        }
    }

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('app')
    );

});