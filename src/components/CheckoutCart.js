import { Button, Breadcrumb } from 'react-bootstrap';
import Price from './Price';

function CheckoutCart() {
    return (
        <div>
            <Breadcrumb ClassName="breadcrumb">
                <Breadcrumb.Item active>Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/address">Add Address</Breadcrumb.Item>
                <Breadcrumb.Item href="/payment">Payment</Breadcrumb.Item>
            </Breadcrumb>
            <div className="flex-container">
                <div class="card mb-3 checkout-card flex-child">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img
                                src="https://assets.myntassets.com/w_111,h_148,q_95,c_limit,fl_progressive/h_148,q_95,w_111/v1/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg"
                                class="card-img"
                                alt="..."
                            />
                        </div>
                        <div class="col-md-8 checkout-body">
                            <div class="card-body">
                                <div>
                                    <h5 class="card-title">Brand Name</h5>
                                </div>
                                <p class="card-text">Product Detail</p>
                                <span>
                                    <strong>Rs: 540</strong>
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
        </div>
    );
}

export default CheckoutCart;
