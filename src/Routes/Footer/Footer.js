import React from 'react';

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <div>
            <h2>Happy shoping {date}</h2>
        </div>
    );
};

export default Footer;