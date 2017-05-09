import React from 'react';
import {IndexLink,} from 'react-router';

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

import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCY4e40sSMHKqeMWVaj37p8DNoMef_DBIs",
    authDomain: "react-esn-project.firebaseapp.com",
    databaseURL: "https://react-esn-project.firebaseio.com",
    projectId: "react-esn-project",
    storageBucket: "react-esn-project.appspot.com",
    messagingSenderId: "818544713250"
  };
  firebase.initializeApp(config);

class Template extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        const db = firebase.database();
        const dbRef = db.ref().child('data');
        dbRef.on('value', snapshot => {
            this.setState({
                data: snapshot.val(),
            });
        });
    }
        render() {
            console.log(this.state.data)
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