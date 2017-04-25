import React from 'react';

import data from './data/sites.js';

class Sites extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sitesListData: data.sites,
        }
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