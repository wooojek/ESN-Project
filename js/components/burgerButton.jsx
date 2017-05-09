import React from 'react';
import {hashHistory} from 'react-router'

import BurgerMenu from './burgerMenu.jsx';


class BurgerButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            display: false,
        }
    }

    handleBurgerClick = (event) => {
        event.preventDefault();
        hashHistory.push('/menu');
    }

    render () {
        return <div id="burger">
                <button id="burgerButton" className="c-hamburger c-hamburger--htra" onClick={event => this.handleBurgerClick(event)}>
                    <span></span>
                </button>
            </div>
    }
}

export default BurgerButton;