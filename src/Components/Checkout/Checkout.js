import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal/Subtotal';

function Checkout() {
    return (
        <div className = "checkout">
            <div className = "checkout__left">
                <img 
                    className = "checkout__ad"
                    src = "./images/banner.jpg"
                />
                <div>
                    <h2 className = "checkout__title">
                        Your shopping basket

                        {/* basket items here */}
                    </h2>
                </div>
            </div>

            <div className = "checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
