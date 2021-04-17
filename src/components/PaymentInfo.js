import React, { Component } from 'react';
import { initiatePayment }  from './Payment';
import { Accordion, Card, Breadcrumb } from 'react-bootstrap';

class PaymentInfo extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            cart: {},
            
        };
    }
    
    isLogged = () => {
        const paymentHandlers = {
            onSuccess: (options) =>{},
            onDismiss: () => {},
        }
        const onOrderCreateFailure = (err) => {

        }

        initiatePayment(paymentHandlers,onOrderCreateFailure);

    }

    componentDidMount() {
        const request = new Request('api/carts/me', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        });
        fetch(request)
            .then((response) => response.json())
            .then((cart) => {
                console.log(cart)
                document.getElementsByClassName("cart-number")[0].innerHTML = cart.cartItems.length;
                this.setState({
                    cart,
                });
            });
    }
    
    render() {
        const { totalAmount } = this.state.cart || 4000;
        return (
            <div>
            <Breadcrumb>
                    <Breadcrumb.Item href="/checkout">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/address">
                        {' '}
                        Add Address
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="/payment" active>Payment</Breadcrumb.Item>
                </Breadcrumb>
                <div className="content">
                    <Accordion defaultActiveKey="0" className="accordion">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                Payment
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <p>Product Price : {totalAmount} </p>
                                    <p>Discount : Rs.450</p>
                                    <p>Delivery Charges : Rs.45</p>
                                    <p>Tax Charges : Rs.250</p>
                                    <p>Total Charges : {totalAmount + 450 + 250 + 45}</p>
                                    <button className="checkout-add add_address" onClick={this.isLogged}>
                                        Pay {totalAmount + 450 + 250 + 45}
                                    </button>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                        </div> 
                </div>
        );
    }
}

export default PaymentInfo;
