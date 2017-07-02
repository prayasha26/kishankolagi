import React, { Component } from 'react';

class searchinput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'apple'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert("On map" + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick an item:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="apple">Grapefruit</option>
                        <option value="banana">Lime</option>
                        <option value="cabbage">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default searchinput;