import React from 'react';
import {Link} from 'react-router-dom'
import {connect } from 'react-redux';

import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon';
import Cart from '../cart/cart';

import '../header/header.styles.scss';



const Header=({currentUser,hidden})=>(
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
        {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon />

    </div>
    {
      hidden ? null :   <Cart />
    }
  

</div>

)
   

const mapStateToProps=({user:{currentUser},cart:{hidden}})=>({
  currentUser,
  hidden
})

export default connect (mapStateToProps,null)(Header);