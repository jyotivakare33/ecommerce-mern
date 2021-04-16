import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingList from './pages/ShoppingList';
import CategoryList from './pages/CategoryList';
import Detail from './pages/Detail';
import Checkout from './pages/Checkout';
import Address from './pages/AddAddress';
import Payment from './pages/Payment';
import Login from './pages/Login';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/checkout" exact component={Checkout} />
                <Route path="/address" exact component={Address} />
                <Route path="/payment" exact component={Payment} />
                <Route path="/login" exact component={Login} />
                <Route path="/brand/:brand" exact component={CategoryList} />
                <Route path="/list/:type" exact component={ShoppingList} />
                <Route path="/:id" exact component={Detail} />
                <Route path="/" exact component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
