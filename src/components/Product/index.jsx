import React from 'react';

import { useStateValue } from '../../Provider/StateProvider';

import {
    Container,
    Info,
    Title,
    Price,
    Rating,
    Image,
    Add
} from './styles';
import StarRateIcon from '@material-ui/icons/StarRate';

function Product({ id, title, price, rating, image }) {
    // eslint-disable-next-line no-empty-pattern
    const [{ }, dispatch] = useStateValue();

    function addToBasket() {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                price,
                rating,
                image
            }
        })
    };

    return (
        <Container>
            <Info>
                <Title>{title}</Title>
                <Price>
                    <small>$</small>
                    <strong>{price}</strong>
                </Price>
            </Info>
            <Rating>
                {Array(rating).fill().map((_, i) => <StarRateIcon key={i} fontSize="large" />)}
            </Rating>
            <Image src={image} alt='product' />

            <Add onClick={addToBasket}>Add to basket</Add>
        </Container>
    );
};

export default Product;
