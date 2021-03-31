import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ShopMen from './pages/ShopMen';
import Detail from './pages/Detail';
import Checkout from './pages/Checkout';
import Address from './pages/AddAddress';
import Payment from './pages/Payment';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/men" exact component={ShopMen} />
                <Route path="/detail" exact component={Detail} />
                <Route path="/checkout" exact component={Checkout} />
                <Route path="/address" exact component={Address} />
                <Route path="/payment" exact component={Payment} />
            </Switch>
        </Router>
    );
}

export default App;
