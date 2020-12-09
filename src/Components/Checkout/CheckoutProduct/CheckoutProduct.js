import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from '../../../Data/StateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch( {
            type: 'REMOVE_FROM_BASKET',
            item: {
                id: id,
            },
        });
    }

    return (
        <div className='checkoutProduct'>

            <img className='checkoutProduct__image' src={image} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>

                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <stronh>{price}</stronh>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>
                    Remove from Basket
                </button>
            </div>

        </div>
    )
}

export default CheckoutProduct
