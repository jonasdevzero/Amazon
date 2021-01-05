import React from 'react';

import { Product } from '../../components'

import {
    Container,
    Inner,
    Banner,
    Row
} from './styles'

function Home() {
    return (
        <Container>
            <Inner>
                <Banner
                    src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.img'
                    alt=''
                />

                <Row>
                    <Product
                        id='1'
                        title='Play Station 5'
                        price={500.0}
                        rating={5}
                        image="https://s2.glbimg.com/I2_W4j1HEKEtrCj-bgTPVMzN5S0=/0x236:3600x2211/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/L/W/GO8WsPQ6C090NUUUD2GA/ps5.jpg"
                    />
                    <Product
                        id='2'
                        title='Xbox series X'
                        price={450.0}
                        rating={5}
                        image='https://compass-ssl.xbox.com/assets/af/b0/afb0b9cd-0d06-43de-8729-6087ff47147d.png?n=GLP-2020_Feature-1400_XSX_935x1166_03.png'
                    />
                </Row>

                <Row>
                    <Product
                        id='3'
                        title='Xiaomi MI 9T'
                        price={870.5}
                        rating={4}
                        image='https://a-static.mlcdn.com.br/618x463/capa-protetora-tpu-emborrachada-para-smartphone-xiaomi-mi-9t/xiaomi/170/a0283d403d22ccf8ef5436e85dc25de9.jpg'
                    />
                    <Product
                        id='4'
                        title='Iphone X'
                        price={1000.0}
                        rating={4}
                        image='https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png'
                    />
                    <Product
                        id='5'
                        title='Sansung S20'
                        price={1339.0}
                        rating={5}
                        image='https://static.carrefour.com.br/medias/sys_master/images/images/h46/hb9/h00/h00/26477859438622.jpg'
                    />
                </Row>

                <Row>
                    <Product
                        id='6'
                        title='God of War'
                        price={20.0}
                        rating={5}
                        image='https://cdn.awsli.com.br/600x450/138/138431/produto/28660383/cf49edd8c9.jpg'
                    />
                </Row>
            </Inner>
        </Container>
    )
};

export default Home;
