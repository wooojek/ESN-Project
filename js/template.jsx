import React from 'react';
import {IndexLink,} from 'react-router';

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
            return <div className="container">
                    <div id="navigation" className="row col-12">
                        <Profile className="col-4"/>
                        <SearchBar className="col-4"/>
                        <BurgerButton className="col-4"/>
                    </div>
                    <section className="row">
                        <div id="leftComponents" className="col-2">
                            <Profile className="row"/>
                            <ul className="row">
                                <li><IndexLink to='/profile'>Profil</IndexLink></li>
                                <li><IndexLink to='/newsfeed'>Aktualności</IndexLink></li>
                                <li><IndexLink to='/messages'>Wiadomości</IndexLink></li>
                                <li><IndexLink to='/groups'>Grupy</IndexLink></li>
                                <li><IndexLink to='/knowledgebase'>Baza wiedzy</IndexLink></li>
                                <li><IndexLink to='/sites'>Strony</IndexLink></li>
                            </ul>
                        </div>
                        <section id="activeContent" className="col-7">
                            {this.props.children}
                        </section>
                        <div id="rightComponents" className="col-3">
                            <ToDoList className="row"/>
                            <Files className="row"/>
                            <Sharing className="row"/>
                        </div>
                    </section>
                </div>;
        }
    }

    export default Template;