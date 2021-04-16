import React, { Component } from 'react';
import { initiatePayment }  from './Payment';

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
            <div className="content main-login-div">
                <div className="paymentContainer">
            <p>Product Price : {totalAmount} </p>
            <p>Discount : Rs.450</p>
            <p>Delivery Charges : Rs.45</p>
            <p>Tax Charges : Rs.250</p>
            <p>Total Charges : {totalAmount + 450 + 250 + 45}</p>
            <button className="checkout-add add_address" onClick={this.isLogged}>
                Pay {totalAmount + 450 + 250 + 45}
            </button>
        </div>
        </div>
    );
    }
}

export default PaymentInfo;
