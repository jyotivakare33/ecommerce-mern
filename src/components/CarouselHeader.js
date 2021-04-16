import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

function CarouselHeader() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="w-100"
                    src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/13/70c6d3e5-3ac0-4e66-87d3-ba11312a79ad1618332608644-Kurtas-Sets_Desk.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="w-100"
                    src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/5/11/0b63b12d-1407-459b-821c-135e68ed1f7c1589191328933-dk-kids.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="w-100"
                    src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/13/693037d3-b480-48e3-8b14-e91ed64807fc1618332359034-Occasion_wear_Desk.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselHeader;
