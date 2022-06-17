import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    return (
        <div className="container-fluid mb-4">
            <img src={require('./images/logo.png')} alt="" id="logo" />
        </div>
    );
}
