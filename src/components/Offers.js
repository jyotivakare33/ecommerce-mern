import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';

function Offers(props) {
    return <Image src={props.src} className="offers" roundedCircle />;
}

export default Offers;
