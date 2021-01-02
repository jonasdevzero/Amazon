import React from 'react';
import { useStateValue } from '../../Provider/StateProvider';

import {
    Container,
    Info
} from './styles';
import StarRateIcon from '@material-ui/icons/StarRate';

function CheckoutProduct({ id, title, image, price, rating }) {
    // eslint-disable-next-line no-unused-vars
    const [_, dispatch] = useStateValue();

    function removeFromBasket() {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id
        });
    };

    return (
        <Container>
            <img src={image} alt={title} />
            <Info>
                <p>{title}</p>
                <p>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div>
                    {Array(rating).fill().map((_, i) => <StarRateIcon key={i} fontSize="large" />)}
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </Info>
        </Container>
    );
};

export default CheckoutProduct;
