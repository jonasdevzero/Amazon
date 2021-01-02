import React from 'react';
import { useHistory } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';

import {
    Container,
    Gift,
    Button
} from './styles';

function Subtotal({ items }) {
    const history = useHistory()

    return (
        <Container>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({items.length} items):
                            <strong>
                                $ {value}
                            </strong>
                        </p>
                        <Gift>
                            <input type="checkbox" />
                            This order contains a gift
                        </Gift>
                        <Button onClick={() => history.push('/payment')}>Proced to Checkout</Button>
                    </>
                )}
                decimalScale={2}
                value={items.reduce((amout, item) => amout + item.price, 0)}
                displayType="text"
                thousandSeparator={true}
                prefix={"$"}
            />
        </Container>
    );
};

export default Subtotal;
