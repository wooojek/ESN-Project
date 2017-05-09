import React from 'react';
import groupsData from '../data/groups.js'
import { connect } from 'react-redux';
import store from '../store.jsx';
import * as actions from '../actions';

class GroupElement extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.props.elementData,
        }
    }

    render() {
        const members = this.state.data.friends.map(item => {
            return <li key={item.id}>
                    {item.name}
                </li>;
        });
        return <li key={this.state.data._id}>
            <div>
                <h3>{this.state.data.company}</h3>
                <div>
                    <p>{this.state.data.about}</p>
                    <ul>{members}</ul>
                </div>
            </div>
        </li>;
    }
}

@connect((store) => {
    return {
        data: store.data,
    };
}, actions)
class Groups extends React.Component {
    componentWillMount() {
        this.setState({
            data: this.props.data.data.groups,
        });
    }

    render() {
        const elements = this.state.data.map(element => {
            return <GroupElement key={element._id} elementData={element} />;
        });
        return <div id='groups'>
            <h2>Groups</h2>
            <ul>
                {elements}
            </ul>
        </div>;
    }
}

export default Groups;