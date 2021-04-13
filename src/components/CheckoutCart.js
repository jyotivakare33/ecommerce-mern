import { Button, Breadcrumb } from 'react-bootstrap';
import Price from './Price';
import React, { Component } from 'react';

class CheckoutCart extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            cart: {},
            
        };
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
                
                this.setState({
                    cart,
                });
            });
    }

    showCartItem(cartItem)
    {
        
        return(
            <div className="flex-container">
                    <div className="card mb-3 checkout-card flex-child">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img
                                    src="https://assets.myntassets.com/w_111,h_148,q_95,c_limit,fl_progressive/h_148,q_95,w_111/v1/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg"
                                    className="card-img"
                                    alt="..."
                                />
                            </div>
                            <div className="col-md-8 checkout-body">
                                <div className="card-body">
                                    <div>
                                        <h5 className="card-title">Brand Name</h5>
                                    </div>
                                    <p className="card-text">Product Detail</p>
                                    <span>
                                        <strong>Rs: {cartItem.pricePerUnit}</strong>
                                    </span>
                                    <Button variant="outline-success" className="select">
                                        M
                                    </Button>{' '}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-child">
                        <Price />
                    </div>
                </div>

        );
    }

    render()
    {
        console.log(this.state.cart);

        // for(var i=0; i<this.state.cart.cartItems.length; i++)
        // {
        //     this.showCartItem(this.state.cart.cartItems[i]);
        // }
        const cartItems = this.state.cart.cartItems || [];
        return (
            
            <div>
                <Breadcrumb className="breadcrumb">
                    <Breadcrumb.Item active>Checkout</Breadcrumb.Item>
                    <Breadcrumb.Item href="/address">Add Address</Breadcrumb.Item>
                    <Breadcrumb.Item href="/payment">Payment</Breadcrumb.Item>
                </Breadcrumb>
                <div>{cartItems.map(cartItem => (<div key={cartItem.productId}>{this.showCartItem(cartItem)}</div>))}</div> 
            </div>
                
        );
    }

}

export default CheckoutCart;
