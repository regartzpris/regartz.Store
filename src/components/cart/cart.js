import React from 'react';

import CustomButton from '../custom-button/custom-button';

import '../cart/cart.styles.scss';


const Cart=()=>(
    <div className='cart'>
        <div className='cart-items'/>
        <CustomButton>CHECK OUT</CustomButton>

        
    </div>
)



export default Cart;