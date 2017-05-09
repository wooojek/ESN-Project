import React from 'react';
import {IndexLink,} from 'react-router';
import { connect } from 'react-redux';

import Profile from './profile.jsx';
import ProfilePic from './profilePic.jsx';
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

import NotFound from './notFound.jsx';

import store from '../store.jsx';
import * as actions from '../actions';


store.subscribe(() => {
    console.log("store changed", store.getState());
});

@connect((store) => {
    return {
        user: store.user,
        data: store.data,
    };
}, actions)
class Template extends React.Component {

    componentWillMount() {
        this.props.fetchData();
    }

    render() {
        return <div className="container">
                <div id="navigation" className="row col-12">
                    <ProfilePic id="navProfile" className="col-4"/>
                    <SearchBar className="col-2"/>
                    <BurgerButton className="col-4"/>
                </div>
                <div className="fixed row col-12">
                    <div id="leftComponents" className="col-3">
                            <ProfilePic id="profilePic" className="row"/>
                            <ul className="row">
                                <li><IndexLink to='/newsfeed'>Aktualności</IndexLink></li>
                                <li><IndexLink to='/messages'>Wiadomości</IndexLink></li>
                                <li><IndexLink to='/groups'>Grupy</IndexLink></li>
                                <li><IndexLink to='/knowledgebase'>Baza wiedzy</IndexLink></li>
                                <li><IndexLink to='/sites'>Strony</IndexLink></li>
                            </ul>
                            <Files className="row"/>
                    </div>
                    <div id="rightComponents" className="col-3">
                            <ToDoList className="row"/>
                    </div>
                </div>
                <section className="row">
                    <section id="activeContent" className="col-6">
                        {this.props.children}
                    </section>
                </section>
            </div>;
    }
}

export default Template;