import React from 'react';
import {IndexLink,} from 'react-router';

import profileData from '../data/profile.js';

class ProfilePic extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imageSrc: 'obrazek',
        }
    }

    componentDidMount() {
        this.setState({
            imageSrc: profileData.data,
        });
    }

    render() {
        return <div>
                <IndexLink to="/profile"><img src={this.state.imageSrc.picture}/></IndexLink>
            </div>;
    }
}

export default ProfilePic;