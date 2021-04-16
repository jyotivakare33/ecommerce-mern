import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';

function Offers(props) {
    return <a href={props.href}><Image src={props.src} className="offers"/></a>;
}

export default Offers;
