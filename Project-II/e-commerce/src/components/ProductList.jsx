// src/components/ProductList.jsx
import React from 'react';
import { useCartDispatch } from '../CartContext';
import './ProductList.css';

const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
];

const ProductList = () => {
    const dispatch = useCartDispatch();

    const addToCart = (product) => {
        dispatch({ type: 'ADD_ITEM', payload: product });
    };

    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <h2>{product.name}</h2>
                    <p>Price: ${product.price}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
