import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './profile.jsx';

document.addEventListener('DOMContentLoaded', function () {

    class App extends React.Component {
        render() {
            return <Profile />;
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );

});