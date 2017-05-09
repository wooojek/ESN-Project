import React from 'react';
import { connect } from 'react-redux';

import store from '../store.jsx';
import * as actions from '../actions';

@connect((store) => {
    return {
        data: store.data,
    };
}, actions)
class Sites extends React.Component {

    componentWillMount() {
        this.setState({
            sitesListData: this.props.data.data.sites,
        });
    }

    handleTheData = () => {
        const sitesList = this.state.sitesListData.map((element, index) => {
            return <li key={element._id}><a href={element.url}>{element.name}</a><p>{element.about}</p></li>;
        });
        return sitesList;
    }

    render() {
        const sitesList = this.handleTheData();
        return <div id='sites'>
            <h2>Sites</h2>
            <ul>
                {sitesList}
            </ul>
        </div>;
    }
}

export default Sites;