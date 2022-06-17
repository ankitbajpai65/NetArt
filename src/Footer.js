import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <div className='container-fluid footer'>
            <ul className="footerList h-100 d-flex flex-row justify-content-around align-items-center">
                <li><img src={require('./images/phone.png')} alt="" className="footerImg" />Toll free 1800 200 1234</li>
                <li><img src={require('./images/fb_logo.png')} alt="" className="footerImg" />www.facebook.com/cripumps</li>
                <li><img src={require('./images/global.png')} alt="" className="footerImg" />www.crigroups.com</li>
            </ul>
        </div>
    )
}

export default Footer;