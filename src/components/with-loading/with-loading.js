import React from 'react';

import { SpinnerOverlay, SpinnerContainer } from '../with-loading/with-loading.styles';


const WithLoading = WrappedComponent => {

    const Loading = ({ isLoading, ...otherProps }) => {
        
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>

        ) : (
                <WrappedComponent {...otherProps} /> //pass through the props to the component we wrap

            );

    };

    return Loading;


};


export default WithLoading;




