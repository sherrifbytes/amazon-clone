import React from 'react';
import Product from './Product/Product';
import './Home.css';

function Home() {
    return (
        /* mainpic/hero section ect */
        <div className='home'>
            <div className="home__container">
                <img 
                    className="home__image" 
                    src="./images/hero.jpg"
                    alt=""
                />
                
                {/* product rows */}
                <div className="home__row">
                    <Product 
                        id="12321341"
                        title='The lean startup: How Constant Innovation Creates Radically Successful Businesses Paperback'
                        pri={11.96}
                        image="./images/thelean.jpg"
                        rating={3}
                    />
                    <Product 
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        rating={4}
                        image="./images/bakingmixer.jpg"                    
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="4903850"
                        title="Blackview Smart Watch X2 (44mm, Bluetooth), Fitness Tracker Heart Rate Monitor IP68 Waterproof"
                        price={199.99}
                        rating={3}
                        image="./images/watch.jpg"                    
                    />
                    <Product 
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="./images/alexaspeaker.jpeg"                    
                    />
                    <Product 
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="./images/ipad.jpg"                    
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="./images/curvedmonitor.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
