import React from 'react';

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

function Product({ title, price, rating, image, onClick }) {
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
                {Array(rating).fill().map(_ => <StarRateIcon fontSize="large" />)}
            </Rating>
            <Image src={image} alt='product' />

            <Add onClick={onClick}>Add to basket</Add>
        </Container>
    );
};

export default Product;
