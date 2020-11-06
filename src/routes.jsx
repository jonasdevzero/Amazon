import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, Checkout, Login } from './pages';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/checkout' component={Checkout} />
                <Route path='/login' component={Login} />
            </Switch>
        </Router>
    );
};

export default Routes;
