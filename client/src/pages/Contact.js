import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'



class Contact extends Component {


    state = {
        name: '',
        email: '',
        message: ''
    };

    handleSubmit = event => {
        event.preventDefault();

        const { name, email, password } = this.state;

        console.log(this.state);
        
    }


    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    render() {
        return (


            <form onSubmit={this.handleSubmit} style={{width:"600px"}}>

            <div>
              <label for="name">Name:</label>
              <input type="name" name="name" onChange={this.handleChange} />
            </div>
            <div>
              <label for="email">Email:</label>
              <input type="email" name="email" onChange={this.handleChange} />
            </div>
            <div>
              <label for="message">Message:</label>
              <input type="textarea" name="message" onChange={this.handleChange} />
            </div>

            <br />

            <div>
              <button style={{ marginBottom: "10px", opacity: "70%" }} type="submit">Submit</button>
            </div>

          </form>


        );
    }

}


export default Contact;