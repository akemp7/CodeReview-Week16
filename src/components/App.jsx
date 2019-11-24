import React from 'react';
import Home from './Home';
import KegList from './KegList';
import OrderForm from './OrderForm';
import { Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/list" component={KegList} />
                <Route path="/order" component={OrderForm} />
            </Switch>
        </div>
    );
}

export default App;