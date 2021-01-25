import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../../Provider/StateProvider';
import CurrencyFormat from 'react-currency-format';
import axios from '../../services/axios';

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
    PriceContainer,
} from './styles';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

function Payment() {
    const [{ basket, user }] = useStateValue();

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const history = useHistory();
    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        });

        async function getClientSecret() {
            const response = await axios({
                url: `/payments/create?total=${basket.reduce((amout, item) => amout + item.price, 0) * 100}`,
                method: "post",
            });

            setClientSecret(response.data.clientSecret);
        };

        getClientSecret();
    }, [basket]);

    async function handleSubmit(e) {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        }).then(({ paymentIntent }) => {
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            history.replace('/orders');
        });
    };

    function handleChange(e) {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    };

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
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <PriceContainer>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>
                                                Order Total:
                                                <strong>{value}</strong>
                                            </h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={basket.reduce((amout, item) => amout + item.price, 0)}
                                    displayType="text"
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button
                                    disabled={processing || disabled || succeeded}
                                >
                                    <span>{processing ? (<p>Processing</p>) : "Buy Now"}</span>
                                </button>
                            </PriceContainer>

                            {error && (<div>{error}</div>)}
                        </form>
                    </Details>
                </Section>
            </Inner>
        </Container>
    );
};

export default Payment;
