import React, { Component } from 'react';
import logo from '../images/header-logo.png';
import cart from '../images/cart.png';
import Login from './Login';
import { Badge } from 'react-bootstrap';

class Header extends Component {

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
                if(cart.cartItems !== undefined) {
                    document.getElementsByClassName("cart-number")[0].innerHTML = cart.cartItems.length;
                }
                this.setState({
                    cart,
                });
            });
    }
    render() {
    return (
        <div>
            <header>
                <a href="/">
                <img src={logo} className="logo" alt="logo" /></a>
                <a href="/list/men" className="nav-links">
                    Men
                </a>
                <a href="/list/women" className="nav-links">
                    Women
                </a>
                <a href="/list/boys" className="nav-links">
                    Boys
                </a>
                <a href="/list/girls" className="nav-links">
                    Girls
                </a>
                <Login />
                <a href="/checkout">
                <Badge variant="info" className="cart-number header-right">
                    0
                </Badge>
                    <img src={cart} alt="" className="cart-icon header-right" /> 
                </a>
            </header>
        </div>
    );
    }
}

export default Header;
