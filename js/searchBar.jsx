import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            searchText: event.target.value,
        });
    }

    render () {
        return <div id="searchBar">
                <input type="text" placeholder="Search..." onChange={this.handleChange} />
            </div>
    }
}

export default SearchBar;