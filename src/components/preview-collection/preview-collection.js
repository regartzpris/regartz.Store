import React from 'react';

import CollectionItem from '../collection-item/collection-item';

import '../preview-collection/preview-collection.stayles.scss';




const CollectionPreview=({title,items}) =>(

    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
               
                items
                .filter((item,index)=>index < 4)  //only show 4
                .map((item)=>(
                    <CollectionItem key={item.id} item={item} />
                ))}
        </div>
    </div>
)

export default CollectionPreview;