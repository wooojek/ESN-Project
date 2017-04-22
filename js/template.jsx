import React from 'react';
import { Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory } from 'react-router';

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

class Template extends React.Component {
        render() {
            return <div id="container">
                    <div id="navigation">
                        <Profile />
                        <SearchBar />
                        <BurgerButton />
                    </div>
                    <div id="leftComponents">
                        <Profile />
                        <ul>
                            <li><IndexLink to='/profile'>Profil</IndexLink></li>
                            <li><IndexLink to='/messages'>Wiadomości</IndexLink></li>
                            <li><IndexLink to='/newsfeed'>Aktualności</IndexLink></li>
                            <li><IndexLink to='/groups'>Grupy</IndexLink></li>
                            <li><IndexLink to='/knowledgebase'>Baza wiedzy</IndexLink></li>
                            <li><IndexLink to='/sites'>Strony</IndexLink></li>
                        </ul>
                    </div>
                    <section id="activeContent">
                        {this.props.children}
                    </section>
                    <div id="rightComponents" style={{float: "right"}}>
                        <ToDoList />
                        <Files />
                        <Sharing />
                    </div>
                </div>;
        }
    }

    export default Template;