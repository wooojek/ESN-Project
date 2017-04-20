import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './profile.jsx';

document.addEventListener('DOMContentLoaded', function () {

    class App extends React.Component {
        render() {
            return <div id="container">
                <Profile />
                </div>;
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );

});