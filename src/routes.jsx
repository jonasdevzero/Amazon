import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { auth } from './firebase';
import { useStateValue } from './Provider/StateProvider';

import { Header } from './components';
import { Home, Checkout, Login } from './pages';

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
            </Switch>
        </Router>
    );
};

export default Routes;
