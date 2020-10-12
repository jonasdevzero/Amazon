import React from 'react';

import { 
    Container,
    Info, 
    Title,
    Price 
} from './styles';

function Product({ children, ...props }) {
    return <Container {...props}>{children}</Container>;
};

Product.Info = function ProductInfo({ children, ...props }) {
    return <Info {...props}>{children}</Info>;
};

Product.Title = function ProductTitle({ children, ...props }) {
    return <Title {...props}>{children}</Title>;
};

Product.Price = function ProductPrice({ children, ...props }) {
    return (
        <Price {...props}>
            <small>$</small>
            <strong>{children}</strong>
        </Price>);
};

export default Product;
