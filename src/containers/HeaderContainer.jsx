import React from 'react';
import { Link } from 'react-router-dom';

import { useStateValue } from '../Provider/StateProvider';

import { Header } from '../components';

function HeaderContainer() {
    const [{ basket }, dispatch] = useStateValue();

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

                <Header.Option>
                    <Header.OptionLineOne>Hello</Header.OptionLineOne>
                    <Header.OptionLineTwo>Sign In</Header.OptionLineTwo>
                </Header.Option>

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
