import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, Checkout } from './pages';
import { HeaderContainer } from './containers';

function Routes() {
    return (
        <Router>
            <HeaderContainer />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/checkout' component={Checkout} />
            </Switch>
        </Router>
    );
};

export default Routes;
