import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { auth } from '../firebase';

import { Login } from '../components';

function LoginContainer() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    function signIn(e) {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/');
        })
        .catch(error => alert(error.message));
    }; 

    function register(e) {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            if (auth) {
                history.push('/');
            };
        })
        .catch(error => alert(error.message));
    };

    return (
        <Login>
            <Link to='/'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="Amazon logo" />
            </Link>

            <Login.Content>
                <h1>Sign in</h1>

                <Login.Form>
                    <h5>E-mail</h5>
                    <Login.Input value={email} onChange={e => setEmail(e.target.value)} type='text' />

                    <h5>Password</h5>
                    <Login.Input value={password} onChange={e => setPassword(e.target.value)} type='password' />

                    <Login.Button type='submit' onClick={signIn}>Sign In</Login.Button>
                </Login.Form>

                <p>
                    By signing-in you agree to Amazon CLONE Conditions of Use & Sale.
                    Please see our Privacy Notice, our Cookies Notice and our 
                    Interest-Based Ads Notice
                </p>

                <Login.Register type='submit' onClick={register}>Create your Amazon Account</Login.Register>
            </Login.Content>
        </Login>
    );
};

export default LoginContainer;
