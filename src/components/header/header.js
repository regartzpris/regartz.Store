import React from 'react';
import {Link} from 'react-router-dom'

import '../header/header.styles.scss';
// import Logo from '../../assets/logo.jpg'


const Header=()=>(
    <div className='header'>
    <Link className='logo-container' to='/'>
        RegartzStore
   
    </Link>
    <div className='options'>
        <Link className='option' to ='/shop'>
            SHOP
        </Link>
        <Link className='option' to ='/contact'>
           CONTACT
        </Link>

    </div>

</div>

)
   



export default Header;