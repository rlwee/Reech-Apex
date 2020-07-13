import React from 'react';

import './ShopPreview.scss';

import shopFeatured from '../../Resources/Images/shopFeatured.png';

const ShopPreview = () => {
    return (
        <div className="container-fluid shop-preview-container">
            <p>LOREM IPSUM</p>
            <div className="row justify-content-center shop-details">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                
            </div>
            <div className="row justify-content-center">
                <button>
                    SHOP NOW
                </button>
            </div>
            <div className="row justify-content-center">
                <img src={shopFeatured} alt="featured"/>
            </div>
        </div>
    );
};

export default ShopPreview;