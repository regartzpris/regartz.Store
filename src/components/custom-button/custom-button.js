import React from 'react';

import '../custom-button/custom-button.styles.scss'


const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    // this button recieve children from other component and will put children inside button 
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''}
     custom-button`} {...otherProps}>
        {children}

    </button>


)


export default CustomButton;