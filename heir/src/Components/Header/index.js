import React from 'react';
import './style.css';
import Wild from './Images/Wild.png'
const Header = props =>{
    return(
        <header className="header">
<div className='wrap'>
<div className='logo'>
    <img src={Wild} alt="Born to be Wild">
    </div>
</div>
        </header>
    );
};





export default Header;