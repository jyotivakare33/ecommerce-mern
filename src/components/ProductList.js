import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import PeopleCard from './PeopleCard';
class ProductList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            repos: [],
        };
    }

    componentDidMount() {
        //const request = new Request(`api/products/${this.props.match.params.type}`, {
        const request = new Request('api/products/men', {
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
      


    render() {
        const peopleCards = this.state.repos.map((person) => (
            <Col sm="3">
                <PeopleCard key={person.title} person={person} />
            </Col>
        ));
        return (
            <div className="product_cards">
                <Row>{peopleCards}</Row>
            </div>
        );
    }
}

export default ProductList;
