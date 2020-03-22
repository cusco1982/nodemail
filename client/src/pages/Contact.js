import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import axios from 'axios';


class Contact extends Component {

  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      message: ''
    }

    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)

  }


  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  async handleSubmit(e) {
    e.preventDefault();

    const { name, email, message } = this.state;
    // console.log(this.state);

    const form = await axios.post('/api/form', {
      name,
      email,
      message
    })

  }



  render() {
    return (


      <Form onSubmit={this.handleSubmit} style={{ width: "600px" }}>

        <div>
          <label for="name">Name:</label>
          <Input type="name" name="name" onChange={this.handleChange} />
        </div>
        <div>
          <label for="email">Email:</label>
          <Input type="email" name="email" onChange={this.handleChange} />
        </div>
        <div>
          <label for="message">Message:</label>
          <Input type="textarea" name="message" onChange={this.handleChange} />
        </div>

        <br />

        <div>
          <button style={{ marginBottom: "10px", opacity: "70%" }} type="submit">Submit</button>
        </div>

      </Form>


    );
  }

}


export default Contact;