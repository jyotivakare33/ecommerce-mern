import Magnifier from 'react-magnifier';
import { Button } from 'react-bootstrap';

function ProductDetail() {
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
            <Button variant="info" className="product_info bag">
                Add To Bag
            </Button>
        </div>
    );
}

export default ProductDetail;
