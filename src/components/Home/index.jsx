import React from 'react';

import {
    Container,
    Inner,
    Banner,
    Row
} from './styles';

function Home({ children, ...props }) {
    return <Container {...props}>{children}</Container>;
};

Home.Inner = function HomeInner({ children, ...props }) {
    return <Inner {...props}>{children}</Inner>;
};

Home.Banner = function HomeBanner({ ...props }) {
    return <Banner {...props} />
}

Home.Row = function HomeRow({ children, ...props }) {
    return <Row {...props}>{children}</Row>
}

export default Home;
