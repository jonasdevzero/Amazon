import React from 'react';

import { useStateValue } from '../../Provider/StateProvider';

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
    const [{ basket }, dispatch] = useStateValue();

    function removeFromBasket() {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: item.id
        })
    };

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
                <button onClick={removeFromBasket}>Remove from basket</button>
            </ProductInfo>
        </Product>
    )
};

export default Checkout;
