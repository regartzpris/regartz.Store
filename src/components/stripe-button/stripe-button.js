import React from 'react';
import StripeCheckout from 'react-stripe-checkout';



const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_rAOHTadQpxGxl5FJtZfBAJPj00omPNENFI';

    const onToken = token => {
        console.log(token);
        alert('Your payment has been Success !')

    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Regartz Store Co.'
            billingAddress
            shippingAddress
            image='https://images.vexels.com/media/users/3/142965/isolated/preview/bb05bdfa55b88a9a5732dfdbb1945791-shopping-woman-icon-by-vexels.png'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;