import { createSelector } from 'reselect';


const selectUser = state => state.user;



//user
export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
);


