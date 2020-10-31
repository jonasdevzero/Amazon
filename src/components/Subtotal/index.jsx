import React from 'react';
import CurrencyFormat from 'react-currency-format';

import {
    Container,
    Gift,
    Button
} from './styles';

function Subtotal({ items }) {
    return (
        <Container>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({items.length} items):
                            <strong>
                                $
                                {items.reduce((initialValue, currentValue) => {
                                    return initialValue + currentValue.price
                                }, 0)}
                            </strong>
                        </p>
                        <Gift>
                            <input type="checkbox" />
                            This order contains a gift
                        </Gift>
                        <Button>Proced to Checkout</Button>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType="text"
                thousandSeparator={true}
                prefix={"$"}
            />
        </Container>
    );
};

export default Subtotal;
