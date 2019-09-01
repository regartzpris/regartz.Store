import ShopActionTypes from './shop.types';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';





export const isFetchCollectionStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});


export const isFetchCollectionSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const isFetchCollectionFailure = errorMessage => ({
    type: ShopActionTypes.isFetchCollectionFailure,
    payload: errorMessage
})



export const fetchCollectionsStartAsync = () => {
    return dispatch => {
      const collectionRef = firestore.collection('collections');
      dispatch(isFetchCollectionStart());
  
      collectionRef
        .get()
        .then(snapshot => {
          const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
          dispatch(isFetchCollectionSuccess(collectionsMap));
        })
        .catch(error => dispatch(isFetchCollectionFailure(error.message)));
    };
}