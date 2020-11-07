import React from 'react';

import {
    Container,
    Content,
    Form,
    Input,
    Button,
    Register
} from './styles';

function Login({ children, ...props }) {
    return <Container {...props}>{children}</Container>
};

Login.Content = function LoginContent({ children, ...props }) {
    return <Content {...props}>{children}</Content>
};

Login.Form = function LoginForm({ children, ...props }) {
    return <Form {...props}>{children}</Form>
};

Login.Input = function LoginInput({ children, ...props }) {
    return <Input {...props}>{children}</Input>
};

Login.Button = function LoginButton({ children, ...props }) {
    return <Button {...props}>{children}</Button>
};

Login.Register = function LoginRegister({ children, ...props }) {
    return <Register {...props}>{children}</Register>
};

export default Login;
