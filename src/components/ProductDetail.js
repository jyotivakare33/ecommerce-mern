import {withRouter} from 'react-router-dom';
import Magnifier from 'react-magnifier';
import { Button } from 'react-bootstrap';
import React, { Component } from 'react';

class ProductDetail extends Component {

    constructor(props) {
        super(props);
        this.routeParam = props.match.params.id;
      }
      
    
    state = {
        productId:'',
        pricePerUnit: '',
        qty: '',
        repos: [],

    };


    componentDidMount() {
        const request = new Request('api/productid/'+this.props.match.params.id , 
        {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
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
        this.setState({[event.target.name]: event.target.value});
        console.log(this.state);
    }

    openModal = () => this.setState({ isOpen: true });

    addToCart = () => {
        this.setState({ isOpen: false })
        const email = this.state.email;
        const password = this.state.password;
        console.log(email,password);
        const request = new Request('api/carts/', 
        {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({'cartItem':{'productId': String, 'qty': Number, 'pricePerUnit': Number}})
        });
        fetch(request).then(res => res.json()).then(json => console.log(json));
          
    };

    render() {
        return (
            <div className="product_detail">
                <Magnifier
                    src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2378414/2018/2/8/11518071262125-Moda-Rapido-Men-Navy-Blue-Striped-Round-Neck-T-shirt-3641518071261992-1.jpg"
                    width={500}
                />
                <h2 className="product_info">Brand Name</h2>
                <h3 className="product_info description">Product Detail</h3>
                <span className="product_info price">
                    <strong>Rs: 540</strong>
                </span>
                <span className="product_info size">
                    <strong>Select Size</strong>
                </span>
                <Button variant="outline-success" className="product_info select">
                    S
                </Button>{' '}
                <Button variant="outline-success" className="product_info select m">
                    M
                </Button>{' '}
                <Button variant="outline-success" className="product_info select l">
                    L
                </Button>{' '}
                <Button variant="outline-success" className="product_info select xl">
                    XL
                </Button>{' '}
                <Button variant="info" type="submit" className="product_info bag" onClick={this.addToCart}>
                    Add To Bag
                </Button>
            </div>
        );
    }
}


export default withRouter(ProductDetail);
