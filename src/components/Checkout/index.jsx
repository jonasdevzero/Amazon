import React from 'react';

import {
    Container,
    Left,
    Title,
    Right,
    Product,
    ProductInfo
} from './styles';
import StarRateIcon from '@material-ui/icons/StarRate';

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

Checkout.Product = function CheckoutProduct({ item }) {
    return (
        <Product>
            <img src={item?.image} alt={item?.title} />
            <ProductInfo>
                <p>{item?.title}</p>
                <p>
                    <small>$</small>
                    <strong>{item?.price}</strong>
                </p>
                <div>
                    {Array(item?.rating).fill().map((_, i) => <StarRateIcon key={i} fontSize="large" />)}
                </div>
                <button>Remove from basket</button>
            </ProductInfo>
        </Product>
    )
};

export default Checkout;
