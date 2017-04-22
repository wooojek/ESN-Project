import React from 'react';

import dataFiles from './data/files.js';

class Files extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dataFiles: dataFiles.files,
        }
    }

    handleFilesData = () => {
        const filesData = this.state.dataFiles.map(element => {
            return <li key={element._id}><img src={element.picture}/><a href={element.url} target="_blank">{element.company}.xlsx</a></li>;
        });

        return filesData;
    }

    render() {
        const filesList = this.handleFilesData();
        return <div id='files'>
            <h2>Files</h2>
            <ul>
                {filesList}
            </ul>
        </div>;
    }
}

export default Files;