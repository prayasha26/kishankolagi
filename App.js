import React, {Component} from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Home from './Conponents/Home'
import {Link} from 'react-router';

class App extends Component {
    render() {
        return (
            <div className="App">


                {this.props.children}
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/pricing">PRICING</Link></li>
                    <li><Link to="/resources">RESOURCES</Link></li>
                    <li><Link to="/contact">CONTACT US</Link></li>
                    <li><Link to="/feedback">FEEDBACK</Link></li>
                    <li><Link to="/aboutpage">ABOUT</Link></li>
                </ul>
                <div className="button_box2">
                    <form className="form-wrapper-2 cf">
                        <input type="text" placeholder="Search..." required/>
                        <button type="submit">Search</button>
                    </form>

                </div>
            </div>
        );
    }
}
export default App;
