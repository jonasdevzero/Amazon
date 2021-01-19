import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { auth } from './firebase';
import { useStateValue } from './Provider/StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import { Header } from './components';
import {
    Home,
    Checkout,
    Login,
    Payment
} from './pages';

const promise = loadStripe('pk_test_51I98HZC464Xu6X2ciROrMOchFlzosvF5eOeiEz7Bzq4OI6jG4y603jNQqYbb1Ynl6J2YqF7BpOI81PSz4wWVG0J800Gn9EwISx');

function Routes() {
    // eslint-disable-next-line no-empty-pattern
    const [{ }, dispatch] = useStateValue();

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
    }, [dispatch]);

    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Header />
                    <Home />
                </Route>
                <Route path='/checkout'>
                    <Header />
                    <Checkout />
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>
                <Route path='/payment'>
                    <Header />
                    <Elements stripe={promise}>
                        <Payment />
                    </Elements>
                </Route>
            </Switch>
        </Router>
    );
};

export default Routes;
