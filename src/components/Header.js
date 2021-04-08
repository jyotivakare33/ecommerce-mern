import logo from '../images/logo.png';
import cart from '../images/cart.png';
import Login from './Login';

function Header() {
    return (
        <div>
            <header>
                <img src={logo} className="logo" alt="logo" />
                <a href="/list/men" className="nav-links">
                    Men
                </a>
                <a href="/list/women" className="nav-links">
                    Women
                </a>
                <a href="/list/boys" className="nav-links">
                    Boys
                </a>
                <a href="/list/girls" className="nav-links">
                    Girls
                </a>
                <Login />
                <a href="/checkout">
                    <img src={cart} alt="" className="header-right" />
                </a>
            </header>
        </div>
    );
}

export default Header;
