import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { initiatePayment }  from './Payment';

class PaymentInfo extends Component {

    isLogged = () => {
        const paymentHandlers = {
            onSuccess: (options) =>{},
            onDismiss: () => {},
        }
        const onOrderCreateFailure = (err) => {

        }

        initiatePayment(paymentHandlers,onOrderCreateFailure);

    }
    
    render() {
        const { totalAmount } = this.props.cart || 4000;
        return (
            <div>
            <p>Product Price : {totalAmount} </p>
            <p>Discount : Rs.450</p>
            <p>Delivery Charges : Rs.450</p>
            <p>Tax Charges : Rs.450</p>
            <p>Total Charges : Rs.450</p>
            <Button variant="info" className="checkout-add" onClick={this.isLogged}>
                Pay
            </Button>
        </div>
    );
    }
}

export default PaymentInfo;
