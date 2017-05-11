import React from 'react';
import {IndexLink,} from 'react-router';
import { connect } from 'react-redux';

import profileData from '../data/profile.js';

@connect(store => store)
class ProfilePic extends React.Component {

    componentWillMount() {
        this.setState({
            imageSrc: profileData.data,
        });
    }

    render() {
        return <div>
                <IndexLink to="/profile"><img src={this.props.fetching ? this.state.imageSrc.picture : this.props.user.picture}/></IndexLink>
            </div>;
    }
}

export default ProfilePic;