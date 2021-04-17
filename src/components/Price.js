import React, { Component } from 'react';

class Price extends Component {

    isLogged = () => {
        const request = new Request('api/users/isLogged', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            }),
        });
        fetch(request).then(res => {
            if (res.status === 201) {
                return (
                    window.location = "/address"
                );
            } else{
                window.location = "/login"
            }     
        })        
    };

    
    render() {
        const { totalAmount } = this.props.cart || 4000;
        return (
            <div>
            <p>Product Price : {totalAmount} </p>
            <p>Discount : Rs.450</p>
            <p>Delivery Charges : Rs.45</p>
            <p>Tax Charges : Rs.250</p>
            <p>Total Charges : {totalAmount + 450 + 45 + 250}</p>
            <button className="checkout-add add_address" onClick={this.isLogged}>
                Pay {totalAmount + 450 + 250 + 45}
            </button>
        </div>
    );
    }
}

export default Price;
