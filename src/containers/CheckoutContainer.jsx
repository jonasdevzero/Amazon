import React from 'react';
import { useStateValue } from '../Provider/StateProvider';
import { Checkout, Subtotal } from '../components';

function CheckoutContainer() {
    const [{ basket, user }] = useStateValue();

    return (
        <Checkout>
            <Checkout.Left>
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

                <div>
                    <h2>Hello, {user ? user.email.split('@')[0] : "Guest"}</h2>
                    <Checkout.Title>Your shopping Basket</Checkout.Title>
                    {basket.map((item, i) => <Checkout.Product key={`${item.title}-${i}`} item={item} />)}
                </div>
            </Checkout.Left>

            <Checkout.Right>
                <Subtotal items={basket} />
            </Checkout.Right>
        </Checkout>
    );
};

export default CheckoutContainer;
