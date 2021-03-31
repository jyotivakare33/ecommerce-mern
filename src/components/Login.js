import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import user from '../images/user.png';

class login extends Component {
    state = {
        isOpen: false,
    };

    openModal = () => this.setState({ isOpen: true });

    closeModal = () => {
        this.setState({ isOpen: false })
        const email = this.state.valEmail;
        const password = this.state.valPassword;
        const request = new Request('http://localhost:4000/api/sessions/', 
        {
            method: 'POST',
            body: JSON.stringify({"email": email,"password": password})
        });
        fetch(request).then(res => res.json()).then(json => console.log(json));
          
    };

    render() {
        return (
            <>
                <a href="#" onClick={this.openModal} alt="">
                    <img src={user} alt="" className="header-right" />
                </a>
                <Modal show={this.state.isOpen} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Label>Email ID: </Form.Label>
                            <Form.Control type="text" value={this.state.valEmail} placeholder="Enter the UserName" />
                            <Form.Label>Password: </Form.Label>
                            <Form.Control type="password" value={this.state.valPassword} placeholder="Enter the Password" />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="submit" onClick={this.closeModal}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default login;
