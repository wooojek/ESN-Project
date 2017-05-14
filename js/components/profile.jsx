import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import profileData from '../data/profile.js';

@connect( store => store.user, actions )
class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ...this.props,
            name: {
                last: this.props.name.last,
                first: this.props.name.first,
            },
            picture: this.props.picture,
            company: this.props.company,
            about: this.props.about,
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
            event.target.picture.classList.remove('display');
        } else if (stateSubmit === 'Zatwierdź') {
            stateSubmit = 'Edytuj';
            event.target.picture.classList.add('display');            
        }

        this.setState({
                name: {
                    first: event.target.first.value,
                    last: event.target.last.value,
                },
                picture: event.target.picture.value,
                company: event.target.company.value,
                about: event.target.about.value,
                submit: stateSubmit,
        });
        this.props.updateUserData(this.state);
    }

    handleFirstNameChange = (event) => {
        this.setState({
            name:{
                ...this.props.name,
                first: event.target.value,
            }
        });
    }

    handleLastNameChange = (event) => {
        this.setState({
            name:{
                ...this.props.name,
                last: event.target.value,
            }
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
                <img src={this.state.picture}/>
                <h2>Profil</h2>
                <form className="profileForm centered" onSubmit={event => this.handleEdit(event)}>
                    <input type='submit' value={this.state.submit}/>
                    <label>Link do zdjęcia:</label>
                    <input type='text' name='picture' value={this.state.picture} onChange={this.handleChange} className="display" {...opts}/>
                    <label>Imię:</label>
                    <input type='text' name='first' value={this.state.name.first} onChange={this.handleFirstNameChange}{...opts}/>
                    <label>Nazwisko:</label>
                    <input type='text' name='last' value={this.state.name.last} onChange={this.handleLastNameChange} {...opts}/>
                    <label>Zawód:</label>
                    <input type='text' name='company' value={this.state.company} onChange={this.handleChange} {...opts}/>
                    <label>Bio:</label>
                    <input type='text' name='about' value={this.state.about} onChange={this.handleChange} {...opts}/>
                </form>
            </div>;
    }
}

export default Profile;