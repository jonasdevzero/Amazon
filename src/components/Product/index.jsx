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

Product.Rating = function ProductRating({ children, ...props }) {
    return (
        <Rating {...props}>
            <StarRateIcon fontSize="large" />
            <StarRateIcon fontSize="large" />
            <StarRateIcon fontSize="large" />
            <StarRateIcon fontSize="large" />
            <StarRateIcon fontSize="large" />
        </Rating>
    )
};

Product.Image = function ProductImage({ src, alt }) {
    return <Image src={src} alt={alt} />
}

Product.Add = function ProductAdd({ ...props }) {
    return <Add {...props}>Add to basket</Add>
}

export default Product;
