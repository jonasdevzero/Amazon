import React from 'react';
import { useStateValue } from '../../Provider/StateProvider';

import { Subtotal } from '../../components';
import { HeaderContainer } from '../../containers';

import {
    Container,
    Title,
    Left,
    Right,
    Product,
    ProductInfo
} from './styles';
import StarRateIcon from '@material-ui/icons/StarRate';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    function removeFromBasket(item) {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: item.id
        });
    };

    return (
        <>
            <HeaderContainer />

            <Container>
                <Left>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

                    <div>
                        <h2>Hello, {user ? user.email.split('@')[0] : "Guest"}</h2>
                        <Title>Your shopping Basket</Title>
                        {basket.map((item, i) => (
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
                                    <button onClick={() => removeFromBasket(item)}>Remove from basket</button>
                                </ProductInfo>
                            </Product>
                        ))}
                    </div>
                </Left>

                <Right>
                    <Subtotal items={basket} />
                </Right>
            </Container>
        </>
    );
};

export default Checkout;
