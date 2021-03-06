import { createSelector } from 'reselect';

// const COLLECTION_ID_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5

// };


const selectShop = state => state.shop;

export const selectShopItems = createSelector(
    [selectShop],
    shop => shop.collections
);


export const selectCollectionsForPreview = createSelector(
    [selectShopItems],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []

);

// export const selectCollection = collectionUrlParam => createSelector( 
//     [selectShopItems],
//     collections => collections.find(
//         collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam] //matching url param
//     )
// );


export const selectCollection = collcetionUrlParam => createSelector(
    [selectShopItems],
    collections => (collections ? collections[collcetionUrlParam] : null)
);



export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);


//for loading 
export  const selectCollectionIsLoading=createSelector(
    [selectShop],
    shop=> !!shop.collections //if there is no collection load is false (note ->!!{} =true ,!!null=false,!!''=false,!!0=false)

)