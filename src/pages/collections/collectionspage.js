import React from 'react';
import { connect } from 'react-redux';

import CollectionsItem from '../../components/collection-item/collection-item';
import { selectCollection } from '../../redux/shop/shop.selector';


import '../collections/collectionspage.styles.scss';


const CollectionsPage = ({ collection }) => {
    // console.log(match.params.collectionId);
    console.log(collection);

    const { title, items } = collection;
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item=><CollectionsItem key={item.id}   item={item} />)
                }
            </div>

        </div>
    );
};



const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)

})



export default connect(mapStateToProps)(CollectionsPage);