import React from 'react';

import '../custom-button/custom-button.styles.scss'


const CustomButton = ({ children, isGoogleSignIn,invertedcart,...otherProps }) => (
    // this button recieve children from other component and will put children inside button 
    <button className={`${invertedcart ? 'invertedcart' :''} ${isGoogleSignIn ? 'google-sign-in' : ''}
     custom-button`} {...otherProps}>
        {children}

    </button>


)


export default CustomButton;