import React from 'react';

import {
    Container,
    Logo,
    Search,
    SearchInput,
    Navegation,
    Option,
    OptionLineOne,
    OptionLineTwo
} from './styles';

function Header({ children, ...props }) {
    return <Container {...props}>{children}</Container>
};

Header.Logo = function HeaderLogo() {
    return <Logo src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />;
};

Header.Search = function HeaderSearch({ children, ...props }) {
    return <Search {...props}>{children}</Search>;
};

Header.SearchInput = function HeaderSearchInput({ children, ...props }) {
    return <SearchInput {...props}>{children}</SearchInput>;
};

Header.Navegation = function HeaderNavegation({ children, ...props }) {
    return <Navegation {...props}>{children}</Navegation>;
};

Header.Option = function HeaderOption({ cjildren, ...props }) {
    return <Option {...props}>{children}</Option>;
};

Header.OptionLineOne = function HeaderOptionLineOne({ children, ...props }) {
    return <OptionLineOne {...props}>{children}</OptionLineOne>;
};

Header.OptionLineTwo = function HeaderOptionLineTwo({ children, ...props }) {
    return <OptionLineTwo {...props}>{children}</OptionLineTwo>;
};

export default Header;
