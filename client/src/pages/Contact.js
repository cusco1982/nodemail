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

        const { name, email, password } = this.state;

        console.log(this.state);
        
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


            <form onSubmit={this.handleSubmit}>
            <div className="loginput">
              <label for="name">Name:</label>
              <input className="form-control" required type="name" id="name" name="name" onChange={this.handleChange} />
            </div>
            <div className="email">
              <label for="email">Email:</label>
              <input className="form-control" required type="email" id="email" name="email" onChange={this.handleChange} />
            </div>
            <div className="message">
              <label for="message">Message:</label>
              <input className="form-control" required type="message" id="message" name="message" onChange={this.handleChange} />
            </div>
            <br />
            <div>
              <button className="btn btn-primary btn-lg btn-block" style={{ marginBottom: "10px", opacity: "70%" }} type="submit">Login Now</button>
              {/* <p class="lead mt-4">
      No Account? <a href="/register">Register</a>
    </p> */}
            </div>
          </form>



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