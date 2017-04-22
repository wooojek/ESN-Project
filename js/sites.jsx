import React from 'react';

import data from './data/sites.js';

class Sites extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sitesListData: data.sites,
        }
        console.log(this.state.sitesListData);
    }

    handleTheData = () => {
        const sitesList = this.state.sitesListData.map((element, index) => {
            return <li><a href={element.url}>{element.name}</a><p>{element.about}</p></li>;
        });
        return sitesList;
    }

    render() {
        const sitesList = this.handleTheData();
        return <div id='sites'>
            <h1>Sites</h1>
            <ul>
                {sitesList}
            </ul>
        </div>;
    }
}

export default Sites;