import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { useStateValue } from '../../Provider/StateProvider';

import {
    Container,
    Logo,
    Search,
    SearchInput,
    SearchIcon,
    Navegation,
    Option,
    OptionBasket,
    BasketShoppingIcon,
    OptionLineOne,
    OptionLineTwo,
    BasketCount
} from './styles';

function Header() {
    const [{ basket, user }] = useStateValue();

    function handleAuth() {
        if (user) {
            auth.signOut();
        };
    };

    return (
        <Container>
            <Link to='/'>
                <Logo
                    src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                    alt=''
                />
            </Link>
            <Search>
                <SearchInput type="text" />
                <SearchIcon />
            </Search>
            <Navegation>

                <Link to={!user ? '/login' : document.location.pathname}>
                    <Option onClick={handleAuth}>
                        <OptionLineOne>Hello, {user ? user.email.split('@')[0] : 'Gest'}</OptionLineOne>
                        <OptionLineTwo>{user ? 'Sign Out' : 'Sign In'}</OptionLineTwo>
                    </Option>
                </Link>

                <Option>
                    <OptionLineOne>Return</OptionLineOne>
                    <OptionLineTwo>Orders</OptionLineTwo>
                </Option>

                <Option>
                    <OptionLineOne>Your</OptionLineOne>
                    <OptionLineTwo>Prime</OptionLineTwo>
                </Option>

                <Link to='/checkout'>
                    <OptionBasket>
                        <BasketShoppingIcon />
                        <BasketCount>{basket?.length}</BasketCount>
                    </OptionBasket>
                </Link>

            </Navegation>
        </Container>
    )
};

export default Header;
