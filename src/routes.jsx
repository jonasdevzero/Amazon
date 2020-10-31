import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, Basket } from './pages'

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/basket' component={Basket} />
            </Switch>
        </Router>
    );
};

export default Routes;
