import React from 'react';
import { useStateValue } from '../../Data/StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct/CheckoutProduct';
import Subtotal from './Subtotal/Subtotal';

function Checkout() {

    const [{ basket }, dispatch] = useStateValue();
    
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

                        {basket.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                            />
                        ))}
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
