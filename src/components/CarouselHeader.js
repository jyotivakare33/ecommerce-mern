import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

function CarouselHeader() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="w-100"
                    src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/3/26/8305bb64-f288-4464-80a3-d52e5b099e261616738512568-599-DK.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="w-100"
                    src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/6/8/eff01060-f706-468d-b97c-95cdf43174f91528443826867-Desktop-Home-Banner.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="w-100"
                    src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/00e0c30e-e48b-46e4-854b-3b4c412246ea1598862765967-Dk22.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselHeader;
