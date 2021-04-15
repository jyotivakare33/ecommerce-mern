/* eslint-disable no-console */
import { withRouter } from 'react-router-dom';
import Magnifier from 'react-magnifier';
import { Button } from 'react-bootstrap';
import React, { Component } from 'react';

class ProductDetail extends Component {
    state = {
        productId: '',
        pricePerUnit: '',
        qty: '',
        cart : true,
        repos: [],
        imageLinks : '',
    };

    componentDidMount() {
        const request = new Request(`api/products/productid/${this.props.match.params.id}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        });
        fetch(request)
            .then((response) => response.json())
            .then((repos) => {
                this.setState({
                    repos,
                });
            });
    }

    handleChange = (event) => {
        console.log('Changing value');
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state);
    };


    openModal = () => this.setState({ isOpen: true });

    addToCart = () => {
        this.setState({ cart: false });
        const pricePerUnit = this.state.repos[0].variant_price;
        const qty = 2;
        const productId = this.state.repos[0].product_id;
        const brand = this.state.repos[0].brand;
        const title = this.state.repos[0].title;
        const images = this.state.repos[0].images;
        console.log(productId,qty,pricePerUnit);
        const request = new Request('api/carts/', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({ cartItem: { productId, qty, pricePerUnit, brand, title, images } }),
        });
        fetch(request)
            .then((res) => res.json())
            .then((json) => console.log(json));
    };


    render() {
        const peopleCards = this.state.repos.map((person) => ( 
            <div className="product_info">
                <Magnifier src={person.images} width={700} />
                <div>
                    <h1 className="margin-40 brand_name">{person.brand}</h1>
                    <h2 className="margin-40 title">{person.title}</h2>
                    <p className="margin-40">{person.body}</p>
                    <span className="margin-40 actual_price">Rs.{person.variant_price}</span>
                    <span className="price">
                        Rs.<del>{person.variant_compare_at_price}</del>
                    </span>
                    <p>
                        <span class="taxes margin-40">inclusive of all taxes</span>
                    </p>
                    <h5 className="margin-40 options">DELIVERY OPTIONS </h5>
                    <p className="margin-40">
                        100% Original Products <br />
                        Free Delivery on order above Rs. 799 <br />
                        Pay on delivery might be available
                        <br />
                        Easy 30 days returns and exchanges <br /> Try & Buy might be available
                    </p>
                    <br />
                    <Button variant="outline-success">S</Button> <Button variant="outline-success">M</Button>{' '}
                    <Button variant="outline-success">L</Button> <Button variant="outline-success">XL</Button> <br />
                    { this.state.cart ? <Button variant="info" type="submit" onClick={this.addToCart}>
                        Add To Cart
                    </Button> : <Button variant="info" type="submit" href="/checkout" >
                        Go To Cart
                    </Button> }
                </div>
            </div>
        ));

        return <div>{peopleCards}</div>;
    }
}

export default withRouter(ProductDetail);
