import React from 'react';
import {IndexLink,} from 'react-router';

class BurgerMenu extends React.Component {
    render () {
    return <div id="burgerMenu">
            <ul>
                <li><IndexLink to='/profile'>Profil</IndexLink></li>
                <li><IndexLink to='/newsfeed'>Aktualności</IndexLink></li>
                <li><IndexLink to='/messages'>Wiadomości</IndexLink></li>
                <li><IndexLink to='/groups'>Grupy</IndexLink></li>
                <li><IndexLink to='/knowledgebase'>Baza wiedzy</IndexLink></li>
                <li><IndexLink to='/sites'>Strony</IndexLink></li>
                <li><IndexLink to='/todolist'>To Do list</IndexLink></li>
                <li><IndexLink to='/files'>Pliki</IndexLink></li>
            </ul>
        </div>
    }
}

export default BurgerMenu;