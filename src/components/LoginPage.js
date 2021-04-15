/* eslint-disable no-console */
import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class LoginPage extends Component {


    state = {
        isOpen: false,
        email: '',
        password: '',
        requestType: '',
    };

    componentDidMount () {
        document.body.style = 'background: #fff;background:linear-gradient(to bottom right,#feedf6,#fcf0e2)';    
    }

    handleChange = (event) => {
        console.log('Changing value');
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state);
    };


    closeModalSignup = () => {
        const { email } = this.state;
        const { password } = this.state;
        console.log(email, password);

        const request = new Request('api/users/', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            }),
            body: JSON.stringify({ email, password }),
        });
        fetch(request).then(res => {
        if (res.status === 200) {
            return (
                window.location = "/address"
            );
        } else{
            window.location = "/login"
        }});  
    };

    closeModalLogin = () => {
        const { email } = this.state;
        const { password } = this.state;
        console.log(email, password);

        const request = new Request('api/sessions/', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            }),
            body: JSON.stringify({ email, password }),
        });
        fetch(request).then(res => {
            if (res.status === 200) {
                return (
                    window.location = "/address"
                );
            } else{
                window.location = "/login"
        }}); 
    };

    render() {
        return (
            <>
            <div className="content main-login-div">
                <div className="content loginPage">
                        <Form>
                        <h1 className="login-header">Login</h1>
                            <Form.Group>
                            <Form.Label className="login-labels">Email ID: </Form.Label>
                            <Form.Control
                                name="email"
                                type="text"
                                value={this.state.email}
                                onChange={this.handleChange}
                                placeholder="johndoe@xyz.com"
                                className = "login-input"
                            />
                            <Form.Label className="login-labels">Password: </Form.Label>
                            <Form.Control
                                name="password"
                                type="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                placeholder="Enter the Password"
                                className = "login-input"
                            />
                        </Form.Group>
                        <div className="content">

                        <button type="submit" className="add_address" onClick={this.closeModalLogin}>
                            Submit </button>
                        <button type="submit" className="add_address" onClick={this.closeModalSignup}>
                            SignUp
                        </button>
                        </div>
                </Form>
                </div>
                </div>
            </>
        );
    }
}

export default LoginPage;
