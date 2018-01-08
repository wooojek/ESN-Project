import React from 'react';
import {IndexLink,} from 'react-router';

class BurgerMenu extends React.Component {
    render () {
    return <div id="burgerMenu">
            <ul>
                <li><div className="burgerClass"><IndexLink to='/profile'>Profil</IndexLink></div></li>
                <li><div className="burgerClass"><IndexLink to='/newsfeed'>Aktualności</IndexLink></div></li>
                <li><div className="burgerClass"><IndexLink to='/messages'>Wiadomości</IndexLink></div></li>
                <li><div className="burgerClass"><IndexLink to='/groups'>Grupy</IndexLink></div></li>
                <li><div className="burgerClass"><IndexLink to='/knowledgebase'>Baza wiedzy</IndexLink></div></li>
                <li><div className="burgerClass"><IndexLink to='/sites'>Strony</IndexLink></div></li>
                <li><div className="burgerClass"><IndexLink to='/todolist'>Lista zadań</IndexLink></div></li>
                <li><div className="burgerClass"><IndexLink to='/files'>Pliki</IndexLink></div></li>
            </ul>
        </div>
    }
}

export default BurgerMenu;