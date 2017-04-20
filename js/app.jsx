import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './profile.jsx';
import SearchBar from './searchBar.jsx';

document.addEventListener('DOMContentLoaded', function () {

    class App extends React.Component {
        render() {
            return <div id="container">
                    <div id="navigation">
                        <Profile />
                        <SearchBar />
                        {/*<BurgerButton />*/}
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