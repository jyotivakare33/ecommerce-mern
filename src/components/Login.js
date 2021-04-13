/* eslint-disable no-console */
import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import user from '../images/user.png';

class login extends Component {
    state = {
        isOpen: false,
        email: '',
        password: '',
        requestType: '',
    };

    handleChange = (event) => {
        console.log('Changing value');
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state);
    };

    openModal = () => this.setState({ isOpen: true });

    closeModalSignup = () => {
        this.setState({ isOpen: false });
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
        fetch(request)
            .then((res) => res.json())
            .then((json) => console.log(json));
    };

    closeModalLogin = () => {
        this.setState({ isOpen: false });
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
        fetch(request)
            .then((res) => res.json())
            .then((json) => console.log(json));
    };

    render() {
        return (
            <>
                <a href="#" onClick={this.openModal}>
                    <img src={user} alt="" className="header-right" />
                </a>
                <Modal show={this.state.isOpen} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Label>Email ID: </Form.Label>
                            <Form.Control
                                name="email"
                                type="text"
                                value={this.state.email}
                                onChange={this.handleChange}
                                placeholder="johndoe@xyz.com"
                            />
                            <Form.Label>Password: </Form.Label>
                            <Form.Control
                                name="password"
                                type="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                placeholder="Enter the Password"
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="submit" onClick={this.closeModalLogin}>
                            Submit
                        </Button>
                        <Button variant="primary" type="submit" onClick={this.closeModalSignup}>
                            Sign Up
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default login;
