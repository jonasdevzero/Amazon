import React from 'react';

import {
    Container,
    Left,
    Title,
    Right
} from './styles';

function Checkout({ children, ...props }) {
    return <Container {...props}>{children}</Container>;
};

Checkout.Left = function CheckoutLeft({ children, ...props }) {
    return <Left {...props}>{children}</Left>;
};

Checkout.Title = function CheckoutTitle({ children, ...props }) {
    return <Title {...props}>{children}</Title>;
};

Checkout.Right = function CheckoutRight({ children, ...props }) {
    return <Right {...props}>{children}</Right>;
};

export default Checkout;
