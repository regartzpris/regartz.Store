import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import {selectCartItems} from '../../redux/cart/cart.selector';

import '../cart/cart.styles.scss';


const Cart = ({cartItems}) => (
    <div className='cart'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem=>(
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            }



        </div>
        <CustomButton>CHECK OUT</CustomButton>


    </div>
);



const mapStateToProps = (state) => ({
    cartItems:selectCartItems(state)
});

export default connect(mapStateToProps)(Cart);