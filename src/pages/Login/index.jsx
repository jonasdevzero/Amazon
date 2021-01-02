import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { auth } from '../../firebase';

import {
    Container,
    Content,
    Form,
    Input,
    Button,
    Register,
} from './styles';

function Login() {
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
        <Container>
            <Link to='/'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="return" />
            </Link>

            <Content>
                <h1>Sign in</h1>

                <Form>
                    <h5>E-mail</h5>
                    <Input value={email} onChange={e => setEmail(e.target.value)} type='text' />

                    <h5>Password</h5>
                    <Input value={password} onChange={e => setPassword(e.target.value)} type='password' />

                    <Button type='submit' onClick={signIn}>Sign In</Button>
                </Form>

                <p>
                    By signing-in you agree to Amazon CLONE Conditions of Use & Sale.
                    Please see our Privacy Notice, our Cookies Notice and our
                    Interest-Based Ads Notice
                </p>

                <Register type='submit' onClick={register}>Create your Amazon Account</Register>
            </Content>
        </Container>
    )
};

export default Login;
