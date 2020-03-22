import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'



class Contact extends Component {


    state = {
        name: '',
        email: '',
        message: ''

        // this.handleChange = this.handleChange.bind(this)
    };

    // handleChange = e => {
    //     this.setState({ [e.target.name]: e.target.value })
    // }
    handleSubmit = event => {
        event.preventDefault();

        const { email, password } = this.state;
        // axios({
        //   url: "/authentication/signin",
        //   method: 'POST',
        //   data: {
        // email,
        // password
        //   }
        // })
        //   .then(response => {
        // console.log(response);
        // const { email } = response.data;
        // sessionStorage.setItem("user", JSON.stringify({ email }));
        // if (email === "manager@gmail.com") {
        //   this.props.history.push('/admin')
        // } else {
        //   this.props.history.push('/tenant')
        // }
        //   })
        //   .catch((error) => {
        // console.log(error)
        //   }
        //   );
    }


    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    render() {
        return (


            <Form onSubmit={this.handleSubmit} style={{ width: '600px' }}>
                <FormGroup>
                    <Label for='name'>Name:</Label>
                    <Input
                        type='text'
                        name='name'
                        onChange={this.handleChange} />
                </FormGroup>

                <FormGroup>
                    <Label for='email'>Email:</Label>
                    <Input
                        type='email'
                        name='email'
                        onChange={this.handleChange} />
                </FormGroup>

                <FormGroup>
                    <Label for='message'>Message:</Label>
                    <Input
                        type='textarea'
                        name='message'
                        onChange={this.handleChange} />
                </FormGroup>

                <Button type="submit">Submit</Button>
            </Form>



            // <div className="myform">
            //     // <div className="row">
            //     //     <div className="col-md">
            //     //         <label className="lable">Name:</label>
            //     //         <input className="form-control input" type="text" name="name" id="fname" placeholder=" First name.." required onChange={props.onChange} />
            //     //     </div>
            //     //     <div className="col-md">
            //     //         <label className="lable">Last Name:</label>
            //     //         <input className="form-control input" type="text" name="name" id="lname" placeholder=" Last Name.." required onChange={props.onChange} />
            //     //     </div>
            //     // </div><br />
            //     // <div className="row">
            //     //     <div className="col-md">
            //     //         <label className="lable1">Email:</label>
            //     //         <input className="form-control input" type="email" id="email" name="email" placeholder=" Your@email.." required onChange={props.onChange} />
            //     //     </div>
            //     //     <div className="col-md">
            //     //         <label className="lable1">Telephone:</label>
            //     //         <input className="form-control input" type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            //             placeholder="XXX-XXX-XXXX" required onChange={props.onChange} />
            //     </div>
            // </div><br />
            // <label class="lable1">Message:</label>
            // <textarea class="form-control text" name="message" id="message" rows="3" cols="128" placeholder=" Tell me what you need"
            //     required></textarea><br /><br />
            // <button id="sendmail" class="btn btn-primary btn-lg btn-block" onClick={props.onSubmit}>Submit</button>
            // </div>


        );
    }

}


export default Contact;