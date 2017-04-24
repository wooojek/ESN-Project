import React from 'react';

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

    handleImgClick = (event) => {
        this.setState({
            display: !this.state.display,
        });
        let form = event.target.parentElement.childNodes[1];
        if(this.state.display) {
            form.classList.remove('display');
        } else {
            form.classList.add('display');
        }
    }

    render() {
        let opts = {};

        if(this.state.submit === 'Edytuj') {
            opts['readOnly'] = 'readOnly';
        } else if (this.state.submit === 'Zatwierdź') {

        }

        return <div id="profile">
                <img src={this.state.imageSrc} onClick={event => this.handleImgClick(event)}/>
                <form className="profileForm display" onSubmit={event => this.handleEdit(event)}>
                    <input type='text' name='imageSrc' value={this.state.imageSrc} onChange={this.handleChange} className="display" {...opts}/>
                    <input type='text' name='firstName' value={this.state.firstName} onChange={this.handleChange}{...opts}/>
                    <input type='text' name='lastName' value={this.state.lastName} onChange={this.handleChange} {...opts}/>
                    <input type='text' name='proffesion' value={this.state.proffesion} onChange={this.handleChange} {...opts}/>
                    <input type='text' name='description' value={this.state.description} onChange={this.handleChange} {...opts}/>
                    <input type='submit' value={this.state.submit}/>
                </form>
            </div>;
    }
}

export default Profile;