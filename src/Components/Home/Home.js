import React from 'react';
import Product from '../Product/Product';
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
                        title='The lean startup'
                        pri={29.99}
                        image="./images/thelean.jpg"
                        rating={3}
                    />
                    <Product />
                </div>

                <div className="home__row">
                    <Product />
                    <Product />
                    <Product />
                </div>

                <div className="home__row">
                    <Product />
                </div>
            </div>
        </div>
    )
}

export default Home
