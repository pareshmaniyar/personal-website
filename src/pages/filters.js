import React from 'react';

class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            value1: '',
            value2: '',
            value3: '',
            redirect: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event, val) {
        this.setState({['value' + val]: event.target.value});
    }
  
    handleSubmit(event) {
        alert('Filter was submitted: ' + this.state.value);
        event.preventDefault();
        //check if valid
        if(this.state.value !== "p@a.as"){
            this.setRedirect();
        }
    }
    render() {
        // const divStyle = {
        //     color: 'blue',
        //     backgroundImage: 'url(' + imgUrl + ')',
        //   };
        return (
            <div style={{textAlign: "left"}}>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Providers:<br/>
                    <select value={this.state.value} onChange={(e) => this.handleChange(e,'')}>
                        <option value="A">Option 1</option>
                        <option value="B">Option 2</option>
                        <option value="C">Option 3</option>
                    </select>
                </label>
                <br/>
                <label>
                    Selectors:<br/>
                    <select value={this.state.value1} onChange={(e) => this.handleChange(e,'1')}>
                        <option value="A">Option 1</option>
                        <option value="B">Option 2</option>
                        <option value="C">Option 3</option>
                    </select>
                </label>
                <br/>
                <label>
                    Selectors:<br/>
                    <select value={this.state.value2} onChange={(e) => this.handleChange(e,'2')}>
                        <option value="A">Option 1</option>
                        <option value="B">Option 2</option>
                        <option value="C">Option 3</option>
                    </select>
                </label>
                <br/>
                <label>
                    Selectors:<br/>
                    <select value={this.state.value3} onChange={(e) => this.handleChange(e,'3')}>
                        <option value="A">Option 1</option>
                        <option value="B">Option 2</option>
                        <option value="C">Option 3</option>
                    </select>
                </label>
                <br/>
                <input type="submit" value="Submit" />
            </form>
            </div>
        );
    }
}

export default Filters