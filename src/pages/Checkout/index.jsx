import React from 'react';
import { useStateValue } from '../../Provider/StateProvider';

import {
    Subtotal,
    CheckoutProduct
} from '../../components';

import {
    Container,
    Title,
    Left,
    Right,
} from './styles';

function Checkout() {
    const [{ basket, user }] = useStateValue();

    return (
        <Container>
            <Left>
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

                <div>
                    <h2>Hello, {user ? user.email.split('@')[0] : "Guest"}</h2>
                    <Title>Your shopping Basket</Title>
                    {basket.map((item, i) => (
                        <CheckoutProduct
                            key={i}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </Left>

            <Right>
                <Subtotal items={basket} text={`Subtotal (${basket?.length} items): `} />
            </Right>
        </Container>
    );
};

export default Checkout;
