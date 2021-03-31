import { Button } from 'react-bootstrap';

function Price() {
    return (
        <div>
            <p>Product Price : Rs.450</p>
            <p>Discount : Rs.450</p>
            <p>Delivery Charges : Rs.450</p>
            <p>Tax Charges : Rs.450</p>
            <p>Total Charges : Rs.450</p>
            <Button variant="info" className="checkout-add">
                Place Order
            </Button>
        </div>
    );
}

export default Price;
