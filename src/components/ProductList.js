import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PeopleCard from './PeopleCard';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: [],
        };
    }

    componentDidMount() {
        fetch('https://fakestoreapi.com/products/')
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
            <Container fluid>
                <Row>{peopleCards}</Row>
            </Container>
        );
    }
}

export default ProductList;
