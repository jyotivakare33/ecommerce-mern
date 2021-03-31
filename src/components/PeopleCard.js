import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class PeopleCard extends Component {
    render() {
        const { title, price } = this.props.person;
        return (
            <Card className="product_card" style={{ width: '19rem' }}>
                <Card.Img
                    variant="top"
                    className="product_image"
                    src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2378414/2018/2/8/11518071262125-Moda-Rapido-Men-Navy-Blue-Striped-Round-Neck-T-shirt-3641518071261992-1.jpg"
                />
                <Card.Body>
                    <Card.Title className="product_title">{title}</Card.Title>
                    <Card.Text>
                        <Card.Link href="/detail">Brand Name</Card.Link>
                    </Card.Text>
                    <Card.Text>Type </Card.Text>
                    <Card.Text>Rs. {price}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default PeopleCard;
