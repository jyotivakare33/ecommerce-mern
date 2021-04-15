import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

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
        fetch(request)
            .then((res) => res.json())
            .catch((err)=>{
                console.log("open modal");
              });
          
    };
    
    render() {
        const { totalAmount } = this.props.cart;
        return (
            <div>
            <p>Product Price : {totalAmount} </p>
            <p>Discount : Rs.450</p>
            <p>Delivery Charges : Rs.450</p>
            <p>Tax Charges : Rs.450</p>
            <p>Total Charges : Rs.450</p>
            <Button variant="info" className="checkout-add" onClick={this.isLogged}>
                Place Order
            </Button>
        </div>
    );
    }
}

export default Price;
