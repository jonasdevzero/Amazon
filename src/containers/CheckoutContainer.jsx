import React from 'react';

import { useStateValue } from '../Provider/StateProvider';

import { Checkout, Subtotal } from '../components';

function CheckoutContainer() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <Checkout>
            <Checkout.Left>
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="ad"/>

                <div>
                    <Checkout.Title>Your shopping Basket</Checkout.Title>
                </div>
            </Checkout.Left>

            <Checkout.Right>
                <Subtotal items={basket} />
            </Checkout.Right>
        </Checkout>
    );
};

export default CheckoutContainer;
