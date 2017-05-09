import React from 'react';

import profileData from '../data/profile.js';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: 'Jan',
            lastName: 'Nowak',
            imageSrc: './img/ic_account_circle_black_48px.svg',
            proffesion: 'CEO',
            description: 'lorem ipsum dolor',
            submit: 'Edytuj',
            display: true,
        }
    }

    handleEdit = (event) => {
        event.preventDefault();

        let stateSubmit = this.state.submit;
        let stateImageSrc = this.state.imageSrc;

        if(stateSubmit === 'Edytuj') {
            stateSubmit = 'Zatwierdź';
            event.target.imageSrc.classList.remove('display');
        } else if (stateSubmit === 'Zatwierdź') {
            stateSubmit = 'Edytuj';
            event.target.imageSrc.classList.add('display');            
        }

        this.setState({
                firstName: event.target.firstName.value,
                lastName: event.target.lastName.value,
                imageSrc: event.target.imageSrc.value,
                proffesion: event.target.proffesion.value,
                description: event.target.description.value,
                submit: stateSubmit,
        });
    }

    handleChange = (event) => {
        let name = event.target.name;
        this.setState({
                [name]: event.target.value,
        });
    }

    render() {
        let opts = {};

        if(this.state.submit === 'Edytuj') {
            opts['readOnly'] = 'readOnly';
        } else if (this.state.submit === 'Zatwierdź') {

        }

        return <div id="profile">
                <img src={this.state.imageSrc}/>
                <h2>Profil</h2>
                <form className="profileForm centered" onSubmit={event => this.handleEdit(event)}>
                    <input type='submit' value={this.state.submit}/>
                    <label>Link do zdjęcia:</label>
                    <input type='text' name='imageSrc' value={this.state.imageSrc} onChange={this.handleChange} className="display" {...opts}/>
                    <label>Imię:</label>
                    <input type='text' name='firstName' value={this.state.firstName} onChange={this.handleChange}{...opts}/>
                    <label>Nazwisko:</label>
                    <input type='text' name='lastName' value={this.state.lastName} onChange={this.handleChange} {...opts}/>
                    <label>Zawód:</label>
                    <input type='text' name='proffesion' value={this.state.proffesion} onChange={this.handleChange} {...opts}/>
                    <label>Bio:</label>
                    <input type='text' name='description' value={this.state.description} onChange={this.handleChange} {...opts}/>
                </form>
            </div>;
    }
}

export default Profile;