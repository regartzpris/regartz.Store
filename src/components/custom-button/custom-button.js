import React from 'react';

import '../custom-button/custom-button.styles.scss'


const CustomButton=({children,...otherProps})=>(
    // this button recieve children from other component and will put children inside button 
    <button className='custom-button' {...otherProps}>
        {children}

    </button>


)


export default CustomButton;