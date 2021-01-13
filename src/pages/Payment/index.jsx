import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../Provider/StateProvider';

import {
    CheckoutProduct,
} from '../../components';

import {
    Container,
    Inner,
    Section,
    TitleContainer,
    Address,
    Items,
    Details,
} from './styles';

function Payment() {
    const [{ basket, user }] = useStateValue();

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        });
    }, []);

    return (
        <Container>
            <Inner>
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
            </h1>

                <Section>
                    <TitleContainer>
                        <h3>Delivery Address</h3>
                    </TitleContainer>

                    <Address>
                        <p>{user?.email}</p>
                        <p>latitude: {latitude}</p>
                        <p>longitude: {longitude}</p>
                    </Address>
                </Section>

                <Section>
                    <TitleContainer>
                        <h3>Review items and delivery</h3>
                    </TitleContainer>

                    <Items>
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
                    </Items>
                </Section>

                <Section>
                    <TitleContainer>
                        <h3>Payment Method</h3>
                    </TitleContainer>

                    <Details>

                    </Details>
                </Section>
            </Inner>
        </Container>
    );
};

export default Payment;
