import React, { Component } from 'react';
import { Card, Badge } from 'react-bootstrap';

class PeopleCard extends Component {
    render() {
        const { title, variantPrice, images, brand, productId } = this.props.person;
        return (
            <Card className="product_card" style={{ width: '19rem' }}>
                <Card.Img variant="top" className="product_image" src={images} />
                <Badge variant="info" className="badge">
                    New
                </Badge>
                <Card.Body>
                    <Card.Title className="product_title">{brand}</Card.Title>
                    <Card.Text>
                        <Card.Link href={`/${productId}`} className="card_title">
                            {title}
                        </Card.Link>
                    </Card.Text>
                    <Card.Text>Rs. {variantPrice}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default PeopleCard;
