import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory
  } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', redirect: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        //check if valid
        if(this.state.value !== "p@a.as"){
            this.setRedirect();
        }
    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if(this.state.redirect)
        return <Redirect to={{
            pathname: '/dashboard',
            state: {
                id: this.state.value
            }
        }} />
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.renderRedirect()}
            <label>
                Email:
                <input type="email" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Login