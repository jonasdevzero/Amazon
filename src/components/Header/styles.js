import styled from 'styled-components/macro';

import SearchI from '@material-ui/icons/Search';
import ShoppingBasketI  from '@material-ui/icons/ShoppingBasket';

export const Container = styled.div`
    display: flex;
    align-items: center;
    position: sticky;
    height: 6rem;
    top: 0;
    z-index: 100;
    background-color: #131921;
`;

export const Logo = styled.img`
    width: 10rem;
    margin: 1.8rem 2rem 0 2rem;
    object-fit: contain;
`;

export const Search = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    border-radius: 2.4rem;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 1.2rem;
    padding: 1rem;
    border: none;
    outline: none;
    border-radius: 0;
`;

export const SearchIcon = styled(SearchI)`
    height: 2.2rem !important;
    width: 2.2rem !important;
    padding: .5rem;
    background-color: #cd9042;
`;

export const Navegation = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const Option = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 1rem;
    color: #fff;
`;

export const OptionLineOne = styled.span`
    font-size: 1rem;
`;

export const OptionLineTwo = styled.span`
    font-size: 1.3rem;
    font-weight: 800;
    cursor: pointer;
`;

export const OptionBasket = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
`;

export const BasketShoppingIcon = styled(ShoppingBasketI)`
    height: 2.5rem !important;
    width: 2.5rem !important;
    cursor: pointer;
`;

export const BasketCount = styled(OptionLineTwo)`
    margin: 0 1rem;
`;