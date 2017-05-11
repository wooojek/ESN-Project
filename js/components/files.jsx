import React from 'react';
import { connect } from 'react-redux';

import dataFiles from '../data/files.js';

@connect(store => {
    return store;
})
class Files extends React.Component {

    componentWillMount() {
        this.setState({
            files: this.props.user.files,
        });
    }

    handleFilesData = () => {
        const filesData = this.props.user.files.map(element => {
            return <li key={element._id}><img src={element.picture}/><a href={element.url} target="_blank">{element.company}.xlsx</a></li>;
        });

        return filesData;
    }

    render() {
        return <div id='files'>
            <h2>Files</h2>
            <ul>
                {this.props.fetching ? null : this.handleFilesData()}
            </ul>
        </div>;
    }
}

export default Files;