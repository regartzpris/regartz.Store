import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {withRouter} from 'react-router-dom';

import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartHidden} from '../../redux/cart/cart.actions';

import '../cart/cart.styles.scss';


const Cart = ({ cartItems ,history ,dispatch}) => (
    <div className='cart'>
        <div className='cart-items'>
            {
                cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                        <span className='empty-message'> Your cart is empty</span>
                    )
            }



        </div>
        <CustomButton onClick={()=>{
            history.push('/checkout');
            dispatch(toggleCartHidden());

            }}>
                CHECK OUT</CustomButton>


    </div>
);



const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter (connect(mapStateToProps)(Cart));