import React from 'react';
import './App.css';


function Footer() {
    let year = new Date();
    return (
        <div className='footer'>
        <div><span>For more enquires, contact us here @ 08123456788</span></div>
        <div><span>Made by Beckyady </span> &copy;<span>{year.getFullYear()}</span></div>
        </div>
    )
}
export default Footer;