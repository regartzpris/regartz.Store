import React from 'react';

import {connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'; 

import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon';
import Cart from '../cart/cart';

import {selectCartHidden} from '../../redux/cart/cart.selector';
import {selectCurrentUser} from '../../redux/user/user.selector';

import {HeaderContainer,LogoContainer,OptionsContainer,OptionLink,OptionDiv} from './header.styles';



const Header=({currentUser,hidden})=>(
    <HeaderContainer>
    <LogoContainer to='/'>
        RegartzStore
   
    </LogoContainer>
    <OptionsContainer>
        <OptionLink to ='/shop'>
            SHOP
        </OptionLink>
    
        <OptionLink to ='/contact'>
           CONTACT
        </OptionLink>
        {currentUser ? (
        <OptionDiv onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionDiv>
      ) : (
        <OptionLink  to='/signin'>
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />

    </OptionsContainer>
    {
      hidden ? null :   <Cart />
    }
  

</HeaderContainer>

)
   

const mapStateToProps= createStructuredSelector({ //// will auto pass are top level state as state props into each sub selector
  currentUser:selectCurrentUser,
  hidden:selectCartHidden
})

export default connect (mapStateToProps,null)(Header);