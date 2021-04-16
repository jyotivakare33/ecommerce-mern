import React, { Component } from 'react';
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
            <div className="content main-login-div">
                <div className="paymentContainer">
            <p>Product Price : {totalAmount} </p>
            <p>Discount : Rs.450</p>
            <p>Delivery Charges : Rs.450</p>
            <p>Tax Charges : Rs.450</p>
            <p>Total Charges : Rs.450</p>
            <button className="checkout-add add_address" onClick={this.isLogged}>
                Pay
            </button>
        </div>
        </div>
    );
    }
}

export default PaymentInfo;
