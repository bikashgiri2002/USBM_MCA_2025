// src/components/Home.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <h2>Welcome to Our E-commerce Site</h2>
            <Carousel showThumbs={false} autoPlay infiniteLoop>
                <div>
                    <img src="https://via.placeholder.com/800x400?text=Slide+1" alt="Slide 1" />
                </div>
                <div>
                    <img src="https://via.placeholder.com/800x400?text=Slide+2" alt="Slide 2" />
                </div>
                <div>
                    <img src="https://via.placeholder.com/800x400?text=Slide+3" alt="Slide 3" />
                </div>
            </Carousel>
            <h3>Featured Products</h3>
            <div className="product-list">
                <div className="product-card">
                    <img src="https://via.placeholder.com/200" alt="Product 1" />
                    <h4>Product 1</h4>
                </div>
                <div className="product-card">
                    <img src="https://via.placeholder.com/200" alt="Product 2" />
                    <h4>Product 2</h4>
                </div>
                <div className="product-card">
                    <img src="https://via.placeholder.com/200" alt="Product 3" />
                    <h4>Product 3</h4>
                </div>
            </div>
        </div>
    );
};

export default Home;
