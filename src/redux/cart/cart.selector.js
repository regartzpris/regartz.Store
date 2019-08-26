import { createSelector } from 'reselect';
//Reselect is a memoized selector function, composed of selectors, that returns something you want in your component’s props.
//Selectors can compute derived data, allowing Redux to store the minimal possible state.
// Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
// Selectors are composable. They can be used as input to other selectors.

const selectCart = state => state.cart; //input selector


export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);


export const SelectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
);


   // reduce() - native array method in js
    //The reduce() method reduces the array to a single value.
    // The reduce() method executes a provided function for each value of the array (from left-to-right).
    //The return value of the function is stored in an accumulator (result/total).
    //Note: reduce() does not execute the function for array elements without values.
    // Note: this method does not change the original array. -- w3school--