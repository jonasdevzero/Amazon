import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { auth } from './firebase';
import { useStateValue } from './Provider/StateProvider';

import { Home, Checkout, Login } from './pages';

function Routes() {
    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            if (authUser) {
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })
            } else {
                dispatch({
                    type: 'SET_USER',
                    user: null
                });
            };
        });
    }, []);

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
