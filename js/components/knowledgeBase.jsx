import React from 'react';

import { connect } from 'react-redux';

import store from '../store.jsx';
import * as actions from '../actions';

@connect((store) => store)
class KnowledgeBase extends React.Component {

    handleKnowledgeData = () => {
        const data = this.props.data.knowledge.map(element => {
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
        return <div id='knowledgeBase'>
            <h2>Knowledge Base</h2>
            <ul>
                {this.handleKnowledgeData()}
            </ul>
        </div>;
    }
}

export default KnowledgeBase;