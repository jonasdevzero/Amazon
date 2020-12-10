import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../firebase'
import { useStateValue } from '../Provider/StateProvider';

import { Header } from '../components';

function HeaderContainer() {
    const [{ basket, user }] = useStateValue();

    function handleAuth() {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <Header>
            <Link to='/'>
                <Header.Logo />
            </Link>
            <Header.Search>
                <Header.SearchInput type="text" />
                <Header.SearchIcon />
            </Header.Search>
            <Header.Navegation>

                <Link to={!user ? '/login' : '/'}>
                    <Header.Option onClick={handleAuth}>
                        <Header.OptionLineOne>Hello, {!user ? 'Gest' : user.email}</Header.OptionLineOne>
                        <Header.OptionLineTwo>{user ? 'Sign Out' : 'Sign In'}</Header.OptionLineTwo>
                    </Header.Option>
                </Link>

                <Header.Option>
                    <Header.OptionLineOne>Return</Header.OptionLineOne>
                    <Header.OptionLineTwo>Orders</Header.OptionLineTwo>
                </Header.Option>

                <Header.Option>
                    <Header.OptionLineOne>Your</Header.OptionLineOne>
                    <Header.OptionLineTwo>Prime</Header.OptionLineTwo>
                </Header.Option>

                <Link to='/checkout'>
                    <Header.OptionBasket>
                        <Header.BasketShoppingIcon />
                        <Header.BasketCount>{basket?.length}</Header.BasketCount>
                    </Header.OptionBasket>
                </Link>

            </Header.Navegation>
        </Header>
    );
};

export default HeaderContainer;
