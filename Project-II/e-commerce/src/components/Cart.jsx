// src/components/Cart.jsx
import React from 'react';
import { useCartState, useCartDispatch } from '../CartContext';

const Cart = () => {
    const cart = useCartState();
    const dispatch = useCartDispatch();

    const removeFromCart = (product) => {
        dispatch({ type: 'REMOVE_ITEM', payload: product });
    };

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            {item.name} - ${item.price}
                            <button onClick={() => removeFromCart(item)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
