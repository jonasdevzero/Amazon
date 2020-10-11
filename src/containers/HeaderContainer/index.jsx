import React from 'react';

import { Header } from '../../components';

function HeaderContainer() {
    return (
        <Header>
            <Header.Logo />
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

                <Header.OptionBasket>
                    <Header.BasketShoppingIcon />
                    <Header.BasketCount>0</Header.BasketCount>
                </Header.OptionBasket>

            </Header.Navegation>
        </Header>
    );
};

export default HeaderContainer;
