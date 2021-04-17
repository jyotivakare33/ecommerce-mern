import React, { Component } from 'react';
import logo from '../images/header-logo.png';
import cart from '../images/cart.png';
import logout from '../images/logout.png';
import Login from './Login';
import { Badge } from 'react-bootstrap';
import AlertMessage from './AlertMessage';

class Header extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            cart: {},
            alert:false,
            
        };
    }

    logout = () => {

        const request = new Request('api/sessions/me', {
            method: 'DELETE',
        });
        fetch(request)
            .then((res) => res.json())
            .then((json) => console.log(json));
            this.setState({
                alert: true
            });
        document.getElementsByClassName('logout_icon ')[0].style.display = "none"
        document.getElementsByClassName('login_icon')[0].style.display = "block"
    };

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
                if(cart.cartItems !== undefined) {
                    document.getElementsByClassName("cart-number")[0].innerHTML = cart.cartItems.length;
                }
                this.setState({
                    cart,
                });
            });
            const requestLogin = new Request('api/users/isLogged', {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                }),
            });
            fetch(requestLogin).then(res => {
                if (res.status === 201) {
                    return (
                        document.getElementsByClassName('login_icon')[0].style.display = "none"
                    );
                } else{
                    return (
                        document.getElementsByClassName('logout_icon ')[0].style.display = "none"
                    );
                }     
            }) 
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
                <a onClick={this.logout} href="#">
                    <img src={logout} alt="" className="header-right logout_icon" /> 
                </a>
                {this.state.alert ?<AlertMessage msg={"User Logged Out"} type="warning"/> :''}
            </header>
        </div>
    );
    }
}

export default Header;
