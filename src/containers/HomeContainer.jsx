import React from 'react';

import { Home, Product } from '../components';

function HomeContainer() {
    return (
        <Home>
            <Home.Inner>
                <Home.Banner
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.img"
                    alt="Amazon Banner"
                />

                <Home.Row>
                    <Product>
                        <Product.Info>
                            <Product.Title>Play Station 5</Product.Title>
                            <Product.Price>500.0</Product.Price>
                        </Product.Info>
                        <Product.Rating rating={5} />
                        <Product.Image 
                            src="https://s2.glbimg.com/I2_W4j1HEKEtrCj-bgTPVMzN5S0=/0x236:3600x2211/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/L/W/GO8WsPQ6C090NUUUD2GA/ps5.jpg" 
                            alt="play station 5" 
                        />
                        <Product.Add />
                    </Product>
                    <Product>
                        <Product.Info>
                            <Product.Title>Xbox series X</Product.Title>
                            <Product.Price>450.0</Product.Price>
                        </Product.Info>
                        <Product.Rating rating={5} />
                        <Product.Image src="https://imagens.canaltech.com.br/produto/1584982530-7573-principal-m.png" 
                            alt="xbox series x" 
                        />
                        <Product.Add />
                    </Product>
                </Home.Row>

                <Home.Row>
                    <Product>
                        <Product.Info>
                            <Product.Title>Xiaomi MI 9T</Product.Title>
                            <Product.Price>870.5</Product.Price>
                        </Product.Info>
                        <Product.Rating rating={4} />
                        <Product.Image src="https://imagens.canaltech.com.br/produto/1562787521-6925-principal-m.png" alt="xiaomi mi 9T" />
                        <Product.Add />
                    </Product>
                    <Product>
                        <Product.Info>
                            <Product.Title>Iphone X</Product.Title>
                            <Product.Price>1000.0</Product.Price>
                        </Product.Info>
                        <Product.Rating rating={4} />
                        <Product.Image src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png" alt="Iphone X" />
                        <Product.Add />
                    </Product>
                    <Product>
                        <Product.Info>
                            <Product.Title>Sansung S20</Product.Title>
                            <Product.Price>1.339.0</Product.Price>
                        </Product.Info>
                        <Product.Rating rating={5} />
                        <Product.Image src="https://static.carrefour.com.br/medias/sys_master/images/images/h46/hb9/h00/h00/26477859438622.jpg" alt="Sansung S20" />
                        <Product.Add />
                    </Product>
                </Home.Row>

                <Home.Row>
                <Product>
                        <Product.Info>
                            <Product.Title>God of War</Product.Title>
                            <Product.Price>20.0</Product.Price>
                        </Product.Info>
                        <Product.Rating rating={5} />
                        <Product.Image src="https://cdn.awsli.com.br/600x450/138/138431/produto/28660383/cf49edd8c9.jpg" alt="God of War" />
                        <Product.Add />
                    </Product>
                </Home.Row>

            </Home.Inner>
        </Home>
    );
};

export default HomeContainer;
