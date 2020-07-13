import React from 'react';
import Header from '../Navigation/Header';
import Footer from '../Navigation/Footer';

const MainLayout = (props) => {
    return (
        <div>
            <Header />
              {props.children}
            <Footer />
        </div>
    );
};

export default MainLayout;