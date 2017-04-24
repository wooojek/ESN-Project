import React from 'react';

import knowledgeBaseData from './data/knowledgeBase.js';

class KnowledgeBase extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            knowledgeData: knowledgeBaseData.knowledgeBase,
        }
    }

    handleKnowledgeData = () => {
        const data = this.state.knowledgeData.map(element => {
            return <li key={element._id}>
                <h3>{element.name.first} {element.name.last}</h3>
                <h4>{element.company}</h4>
                <p>{element.phone} {element.email}</p>
                <p><strong>Zakres wiedzy:</strong><br/>{element.about}</p>
                <p>Tags: {element.tags.map(item => item+" ")}</p>
                <p>Ulubiony Owoc: {element.favoriteFruit}</p>
            </li>;
        });

        return data;
    }

    render() {
        const knowledge = this.handleKnowledgeData();
        return <div id='knowledgeBase'>
            <h3>Knowledge Base</h3>
            <ul>
                {knowledge}
            </ul>
        </div>;
    }
}

export default KnowledgeBase;